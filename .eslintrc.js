const path = require(`path`)

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    `plugin:react/recommended`,
    `airbnb`,
    `plugin:jest/style`,
    `plugin:jest-dom/recommended`,
    `plugin:testing-library/react`,
  ],
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: `module`,
  },
  plugins: [
    `react`,
    `jest`,
    `jest-dom`,
    `testing-library`,
  ],
  ignorePatterns: [`*.json`],
  rules: {
    "global-require": 1,
    "import/no-dynamic-require": 0,
    'arrow-parens': [`error`, `as-needed`],
    quotes: [`error`, `backtick`],
    indent: [
      `error`,
      2,
    ],
    semi: [`error`, `never`],
    'react/no-array-index-key': 0,
    'react/no-unescaped-entities': 0,
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/anchor-has-content': 0,
    'eol-last': [`error`, `always`],
    'react-hooks/exhaustive-deps': 0,
    'no-underscore-dangle': 0,
    camelcase: 0,
    'no-console': 0,
    'react/require-default-props': 0,
    'react/jsx-fragments': 0,
    'react/jsx-one-expression-per-line': [1, { allow: `single-child` }],
    'no-param-reassign': 0,
    'react/forbid-prop-types': 0,
    'no-bitwise': 0,
    'no-plusplus': 0,
    'no-shadow': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/media-has-caption': 0,
    'jest/no-disabled-tests': `warn`,
    'jest/no-focused-tests': `error`,
    'jest/no-identical-title': `error`,
    'jest/prefer-to-have-length': `warn`,
    'jest/valid-expect': `error`,
    'import/no-extraneous-dependencies': [
      `error`,
      {
        devDependencies: true,
      },
    ],
    'no-case-declarations': 0,
    "react/jsx-filename-extension": [1, { extensions: [`.js`, `.jsx`, `.ts`, `.tsx`] }],
    "import/extensions": [
      `error`,
      `ignorePackages`,
      {
        js: `never`,
        jsx: `never`,
        ts: `never`,
        tsx: `never`,
      },
    ],
    "no-use-before-define": 0,
  },
  settings: {
    react: {
      createClass: `createClass`,
      pragma: `React`,
      version: `17`,
    },
    'import/resolver': {
      node: {
        paths: [
          path.resolve(__dirname, `./src`),
        ],
        extensions: [`.js`, `.jsx`, `.ts`, `.tsx`],
      },
    },
    jsdoc: {
      mode: `typescript`,
    },
  },
}
