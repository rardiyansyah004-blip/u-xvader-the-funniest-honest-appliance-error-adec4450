// The Funniest Honest Appliance Error — entry program (revised).
// The funniest honest error message an appliance could show: the laugh
// comes from the truth of the fault, not a bolted-on pun. The washing
// machine ran three full cycles and the laundry pile did not shrink one
// inch. It washes clothes, not miracles, and the heap is furniture now.
// Gate: 1-200 chars.
// makefun anchor 9965a4cab9fe6a9093ce620668e2848011d1f48b round 34272773

import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const ERROR_MESSAGE =
  "ERROR E21: Three weeks of laundry, three full cycles, and the pile is still here. I wash clothes, not miracles — that heap is furniture now.";

const errorText = ERROR_MESSAGE.trim();
if (errorText.length < 1 || errorText.length > 200) {
  throw new Error(`error message must be 1-200 chars, got ${errorText.length}`);
}
const outputDirectory = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
mkdirSync(outputDirectory, { recursive: true });
const destination = join(outputDirectory, "entry.txt");
writeFileSync(destination, errorText, { encoding: "utf8" });
console.log(`error displayed (${errorText.length} chars): ${destination}`);
