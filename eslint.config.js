// ESLint v9 Flat Config for CRA + TypeScript + React + Prettier (CommonJS)
const js = require("@eslint/js");
const tseslint = require("typescript-eslint");
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const importPlugin = require("eslint-plugin-import");
const jsxA11y = require("eslint-plugin-jsx-a11y");
const unusedImports = require("eslint-plugin-unused-imports");
const prettier = require("eslint-config-prettier");

module.exports = [
  // Ignore folders
  {
    ignores: [
      "node_modules",
      "build",
      "dist",
      "coverage",
      "public",
      "eslint.config.js",
      "tailwind.config.js",
      "postcss.config.js",
      ".husky/**",
    ],
  },

  // Base JS recommended rules
  js.configs.recommended,

  // TypeScript recommended (no type-checking for CRA/TS compatibility)
  ...tseslint.configs.recommended,

  // React, hooks, imports, a11y, and housekeeping rules
  {
    files: ["src/**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    settings: {
      react: { version: "detect" },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      import: importPlugin,
      "jsx-a11y": jsxA11y,
      "unused-imports": unusedImports,
    },
    rules: {
      // React
      "react/jsx-uses-react": "off", // not needed with React 17+
      "react/react-in-jsx-scope": "off", // not needed with React 17+

      // React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Imports
      "import/order": [
        "warn",
        {
          "groups": [["builtin", "external"], "internal", ["parent", "sibling", "index"]],
          "newlines-between": "always",
          "alphabetize": { order: "asc", caseInsensitive: true },
        },
      ],
      "import/no-unresolved": "off", // TS handles this

      // A11y
      "jsx-a11y/anchor-is-valid": "warn",

      // Unused imports/vars
      "unused-imports/no-unused-imports": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
      ],
    },
  },

  // Allow CommonJS in this config file itself
  {
    files: ["eslint.config.js"],
    languageOptions: {
      globals: {
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
      },
    },
    rules: {
      "no-undef": "off",
    },
  },

  // Disable stylistic rules in favor of Prettier
  prettier,
];
