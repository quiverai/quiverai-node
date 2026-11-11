/**
 * Generate an SVG from a text prompt and save it to disk.
 *
 * To run this example from the examples directory:
 * npm run build && npx tsx generateSvg.example.ts
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
    },
  });

  // Documented API errors (4xx/5xx) are returned, not thrown.
  if ("code" in result) {
    throw new Error(
      `${result.code}: ${result.message} (request ${result.requestId})`,
    );
  }
  // Only returned when the request sets `stream: true`.
  if (result instanceof EventStream) {
    throw new Error("Unexpected streaming response");
  }

  for (const [i, doc] of result.data.entries()) {
    const file = `output-${i}.svg`;
    await writeFile(file, doc.svg);
    console.log(`Wrote ${file}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
