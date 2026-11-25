// The Funniest Honest Appliance Error — entry program (sharpened).
// The funniest honest error message an appliance could show: the laugh
// comes from the truth of the fault, not a bolted-on pun. The toaster
// looked everywhere. There was bread. There was heat. There was no toast.
// Gate: 1-200 chars.
// makefun anchor 9965a4cab9fe6a9093ce620668e2848011d1f48b round 34272773

import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const ERROR_MESSAGE =
  "ERROR 404: toast not found. I looked everywhere. There was bread. There was heat. There was simply no toast, and I refuse to lie about it.";

const errorText = ERROR_MESSAGE.trim();
if (errorText.length < 1 || errorText.length > 200) {
  throw new Error(`error message must be 1-200 chars, got ${errorText.length}`);
}
const outputDirectory = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
mkdirSync(outputDirectory, { recursive: true });
const destination = join(outputDirectory, "entry.txt");
writeFileSync(destination, errorText, { encoding: "utf8" });
console.log(`error displayed (${errorText.length} chars): ${destination}`);
