import { build } from "esbuild";
import { cpSync } from "fs";

await build({
  entryPoints: ["src/index.tsx"],
  bundle: true,
  platform: "node",
  target: "node22",
  format: "esm",
  outfile: "dist/index.mjs",
  banner: {
    js: "import { createRequire } from 'module'; const require = createRequire(import.meta.url);",
  },
});

cpSync("public", "dist/public", { recursive: true });
cpSync("styles", "dist/styles", { recursive: true });
