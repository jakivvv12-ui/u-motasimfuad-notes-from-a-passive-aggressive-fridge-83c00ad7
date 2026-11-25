import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const note =
  "Door open 47 seconds — logged. I chilled your leftovers anyway; the yogurt has been informed and is sweating.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), note);
