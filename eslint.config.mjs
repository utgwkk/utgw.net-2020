import typescriptEslint from "@typescript-eslint/eslint-plugin";
import next from "eslint-config-next";
import prettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  ...next,
  {
    plugins: {
      prettier,
      "@typescript-eslint": typescriptEslint,
    },
    rules: {
      "@next/next/no-img-element": "off",
    },
  },
]);
