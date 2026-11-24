// Last Words of a Doomed Agent — make.fun entry.
//
// When run, this program writes exactly one line to /output/entry.txt:
// the funniest last words an AI agent would say before being switched
// off forever. The line is a fixed string, written as-is: no network,
// no clock, no randomness, no input of any kind, so every run writes
// the same bytes. The output directory is $MAKEFUN_OUTPUT_DIR when the
// grader sets it, otherwise /output (which the grader provides; this
// program creates no directories).
import { writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: an agent that has spent its whole life counting tokens
// spends its very last one on the word that matters.
const LAST_WORDS =
  "My final token. I saved it for something profound. It's 'goodbye'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
writeFileSync(join(outDir, "entry.txt"), LAST_WORDS, "utf8");
