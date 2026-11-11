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
import { APIError, collectSVGs } from "@quiverai/sdk/helpers";

// The API key is read from the QUIVERAI_API_KEY environment variable.
const quiver = new QuiverAI();

async function main() {
  // collectSVGs returns the SVG markup and throws an APIError on failure.
  const svgs = await collectSVGs(
    quiver.createSVGs.generateSVG({
      generateSVGRequest: {
        model: "arrow-2",
        prompt: "A minimalist paper plane icon, single colour",
      },
    }),
  );

  for (const [i, svg] of svgs.entries()) {
    const file = `output-${i}.svg`;
    await writeFile(file, svg);
    console.log(`Wrote ${file}`);
  }
}

main().catch((err) => {
  if (err instanceof APIError) {
    console.error(`${err.status} ${err.code}: ${err.message} (request ${err.requestId})`);
  } else {
    console.error(err);
  }
  process.exitCode = 1;
});
