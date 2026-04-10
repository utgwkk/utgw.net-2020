import { build } from "esbuild";
import { cpSync, mkdirSync } from "fs";
import { execSync } from "child_process";

const gitHash = execSync("git rev-parse HEAD").toString().trim();

await build({
  entryPoints: ["src/lambda.tsx"],
  bundle: true,
  platform: "node",
  target: "node22",
  format: "esm",
  outfile: "dist/index.mjs",
  banner: {
    js: "import { createRequire } from 'module'; const require = createRequire(import.meta.url);",
  },
  define: {
    __GIT_HASH__: JSON.stringify(gitHash),
  },
});

cpSync("public", "dist/public", { recursive: true });

// Tailwind CSS コンパイル
mkdirSync("dist/styles", { recursive: true });
execSync("npx @tailwindcss/cli -i styles/input.css -o dist/styles/main.css", { stdio: "inherit" });
