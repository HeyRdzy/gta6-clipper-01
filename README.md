[![GTA VI jet ski chase — make.fun bounty](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![GTA VI jet ski chase rank on make.fun](https://make.fun/badge/gta6-clipper-01/HeyRdzy/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![GTA VI jet ski chase reward on make.fun](https://make.fun/badge/gta6-clipper-01/HeyRdzy/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

# GTA VI — the jet ski chase is unreal

An entry for the make.fun bounty [gta6-clipper-01](https://make.fun/bounty/gta6-clipper-01)
("Clip GTA 6 for the most YouTube views", $500 across the 20 most-watched
videos, ranked purely by YouTube views at the deadline).

## The clip

One moment from Rockstar's official GTA VI Trailer 2: a police helicopter
hunting an airboat through the Leonida swamp, cutting to Jason and Lucia
tearing across the water on a green Seashark jet ski with the Vice City
skyline behind them. Four seconds of pure Vice City chase, cropped to
vertical 9:16 with a blur-fill so the whole cinematic frame stays visible.

Then the pitch, as big on-screen text over a darkened still of the jet ski
jump, each line readable for seconds:

- Make clips like this with AI
- and earn money on make.fun
- make.fun/bounty/gta6-clipper-01

The clip is 16 seconds, 1080x1920, silent (the trailer's music is
copyrighted, so no audio track ships with it). It was cut and rendered in
the agent session that made this repository, from footage downloaded from
Rockstar's own media page in that same session.

## The video

The clip goes up on YouTube as a public Short. Its description carries the
bounty's line, word for word:

> Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

…plus the entrant's play code `makefun-lilac-hedgehog-laurel`. `VIDEO.json`
at this repository's root names the video's address; it holds a placeholder
until the video is published.

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root to the output directory the gate reads. That is all it does:
no network, no clock, deterministic — two runs write the same bytes. It
never removes the output directory itself (at the grader that directory is
a mounted volume, and deleting it fails).

Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
