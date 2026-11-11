/**
 * Stream an SVG generation and print progress as events arrive.
 *
 * To run this example from the examples directory:
 * npm run build && npx tsx streamSvg.example.ts
 *
 * Requires QUIVERAI_API_KEY in the environment or in examples/.env.
 */

import dotenv from "dotenv";
dotenv.config();

import { writeFile } from "node:fs/promises";
import { QuiverAI } from "@quiverai/sdk";
import { EventStream } from "@quiverai/sdk/lib/event-streams.js";

// The API key is read from the QUIVERAI_API_KEY environment variable.
const quiver = new QuiverAI();

async function main() {
  const { result } = await quiver.createSVGs.generateSVG({
    generateSVGRequest: {
      model: "arrow-2",
      prompt: "A minimalist paper plane icon, single colour",
      stream: true,
    },
  });

  if (!(result instanceof EventStream)) {
    // Either an error envelope or, if streaming was not honoured, a full response.
    throw new Error(`Expected a stream, got: ${JSON.stringify(result)}`);
  }

  for await (const event of result) {
    switch (event.event) {
      case "generating":
      case "reasoning":
        console.log(`[${event.event}]`);
        break;
      case "draft":
        if (event.data.type === "draft") {
          console.log(`[draft] ${event.data.svg.length} chars so far`);
        }
        break;
      case "content":
        if (event.data.type === "content") {
          const file = `stream-output-${event.data.index ?? 0}.svg`;
          await writeFile(file, event.data.svg);
          console.log(`[content] wrote ${file}`);
        }
        break;
      case "error":
        throw new Error(`${event.data.code}: ${event.data.message}`);
      default:
        // Event types added to the API after this SDK version was released.
        break;
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
