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
import { collectSVGs } from "@quiverai/sdk/helpers";

// The API key is read from the QUIVERAI_API_KEY environment variable.
const quiver = new QuiverAI();

async function main() {
  const svgs = await collectSVGs(
    quiver.createSVGs.generateSVG({
      generateSVGRequest: {
        model: "arrow-2",
        prompt: "A minimalist paper plane icon, single colour",
        stream: true,
      },
    }),
    {
      // Called for every server-sent event, in arrival order.
      onEvent: (event) => {
        if (event.event === "draft" && event.data.type === "draft") {
          console.log(`[draft] ${event.data.svg.length} chars so far`);
        } else {
          console.log(`[${event.event}]`);
        }
      },
    },
  );

  for (const [i, svg] of svgs.entries()) {
    const file = `stream-output-${i}.svg`;
    await writeFile(file, svg);
    console.log(`Wrote ${file}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
