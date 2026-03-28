import tseslint from 'typescript-eslint';
import next from "eslint-config-next";
import prettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  ...next,
  tseslint.configs.recommended,
  {
    plugins: {
      prettier,
    },
    rules: {
      "@next/next/no-img-element": "off",
    },
  },
]);
