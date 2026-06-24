import { defineConfig, flatConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import nextLint from "@next/eslint-plugin-next";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  {
    ignores: [
      // Default ignores of eslint-config-next:
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    // Additional ESLint rules for stricter TypeScript and React checks
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      "@next": nextLint,
    },
    rules: {
      // TypeScript strictness
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/strict-boolean-expressions": "warn",
      "@typescript-eslint/strict-boolean-expressions": "warn",

      // React best practices
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-vars": "error",
      "react/jsx-uses-react": "error",
      "react/jsx-no-target-blank": "warn",
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-key": "error",

      // Next.js specific rules
      "@next/next/no-img-element": "error",
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-sync-scripts": "error",
    },
  },
]);

export default eslintConfig;
