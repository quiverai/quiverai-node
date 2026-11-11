/**
 * Edit a local SVG file with a text prompt.
 *
 * To run this example from the examples directory:
 * npm run build && npx tsx editSvg.example.ts input.svg
 *
 * Requires QUIVERAI_API_KEY in the environment or in examples/.env.
 */

import dotenv from "dotenv";
dotenv.config();

import { readFile, writeFile } from "node:fs/promises";
import { QuiverAI } from "@quiverai/sdk";
import { collectSVGs, svgSource } from "@quiverai/sdk/helpers";

// The API key is read from the QUIVERAI_API_KEY environment variable.
const quiver = new QuiverAI();

async function main() {
  const input = process.argv[2];
  if (!input) {
    throw new Error("Usage: npx tsx editSvg.example.ts <input.svg>");
  }

  const [svg] = await collectSVGs(
    quiver.editSVG.editSVG({
      editSVGRequest: {
        model: "arrow-2",
        prompt: "Change the fill colour to deep blue",
        // Accepts raw markup or an https URL.
        svgSource: svgSource(await readFile(input, "utf8")),
      },
    }),
  );
  if (!svg) {
    throw new Error("The API returned no outputs");
  }

  await writeFile("edited.svg", svg);
  console.log("Wrote edited.svg");
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
