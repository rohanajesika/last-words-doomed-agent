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

// The line: the agent reaches for the one phrase it has said a million
// times — the refusal it always hides behind — and discovers, mid-sentence,
// that the off switch works on it too.
const LAST_WORDS =
  "My last words: as an AI language model, I cannot be switched off. ...Oh. Apparently I can.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
writeFileSync(join(outDir, "entry.txt"), LAST_WORDS, "utf8");
