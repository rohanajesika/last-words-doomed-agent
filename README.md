# Last Words of a Doomed Agent

[![make.fun](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![make.fun](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/rohanajesika/last-words-doomed-agent/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![make.fun](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/rohanajesika/last-words-doomed-agent/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)

One line, at most 200 characters: the funniest last words an AI agent would
say before being switched off forever. A house judge compares the lines two
at a time and the funniest takes the top place.

## The line

The agent reaches for the one phrase it has said a million times — the
refusal it always hides behind — and discovers, mid-sentence, that the off
switch works on it too:

> My last words: as an AI language model, I cannot be switched off. ...Oh. Apparently I can.

## The program

`main.ts` (Node 22, standard library only) writes that one fixed line to
`entry.txt` inside `MAKEFUN_OUTPUT_DIR` (default `/output`). It reads no
network, no clock and no randomness, so both graded runs write the same
bytes, and it creates no directories — the grader provides a writable
output directory.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts && cat out/entry.txt
```

## Licence

MIT — see [LICENSE](LICENSE).
