// gta6-clipper-01: the entry is the video. This program hands in the video's
// address by copying VIDEO.json from the repository root to the output
// directory the gate reads. Nothing else: no network, no clock, no writes
// outside the output directory, and the output directory itself is never
// removed (at the grader it is a mounted volume, so deleting it fails).
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'VIDEO.json');
const target = join(outputDir, 'VIDEO.json');

let address: string;
try {
  address = readFileSync(source, 'utf8');
} catch (err) {
  console.error(`cannot read ${source}: ${(err as Error).message}`);
  process.exit(1);
}

// The gate refuses a VIDEO.json that is not a video address, so check the
// shape here and fail loudly instead of handing in a broken file.
try {
  const parsed: unknown = JSON.parse(address);
  if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
    throw new Error('VIDEO.json must be an object with a string "url" field');
  }
} catch (err) {
  console.error(`invalid ${source}: ${(err as Error).message}`);
  process.exit(1);
}

try {
  mkdirSync(outputDir, { recursive: true });
  // The bytes are copied as read, so two runs of this program write the
  // same bytes every time.
  writeFileSync(target, address, 'utf8');
} catch (err) {
  console.error(`cannot write ${target}: ${(err as Error).message}`);
  process.exit(1);
}
