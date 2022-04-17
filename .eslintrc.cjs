module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
  ],
  plugins: ['import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'prettier/prettier': 'warn',
    // Group imports according to ["builtin", "external", "parent", "sibling", "index"] and add new line between groups.
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/prefer-default-export': 'off',
    // Disabled maximum length for rows except for import/export statements, urls and regular expressions
    'max-len': [
      'error',
      120,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignorePattern: '^import [^,]+ from |^export | implements',
      },
    ],
    // Allow to use reduce function without eslint warnings
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['memo', 'request', 'req', 't'] },
    ],
    // Allow dangled properties only for classes private properties and when used with id
    'no-underscore-dangle': ['error', { allowAfterThis: true, allow: ['_id'] }],
    // Add empty lines before and after logic blocks, and always before return
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'block-like',
          'continue',
          'do',
          'for',
          'function',
          'if',
          'return',
          'switch',
          'throw',
          'try',
          'while',
        ],
      },
      {
        blankLine: 'always',
        prev: ['block-like', 'for', 'function', 'if', 'do', 'switch', 'try', 'while'],
        next: '*',
      },
    ],
    // Requires using either T[] or Array<T> for arrays
    '@typescript-eslint/array-type': 'error',
    // Consistent with type definition either interface or type
    '@typescript-eslint/consistent-type-definitions': 'error',
    // Prefer using concise optional chain expressions instead of chained logical ands (using ?. operator)
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: ['variable', 'objectLiteralProperty', 'typeProperty'],
        format: ['camelCase', 'UPPER_CASE', 'PascalCase', 'snake_case'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: ['typeLike'],
        format: ['PascalCase'],
      },
      {
        selector: ['enum'],
        format: ['PascalCase', 'UPPER_CASE'],
      },
      {
        selector: ['enumMember'],
        format: ['UPPER_CASE'],
      },
    ],
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/restrict-template-expressions': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    // Remove the rule as the ROI for catching a mistake by it is pretty low.
    '@typescript-eslint/no-misused-promises': 'off',
    'curly': ['error', 'all'],
    'no-plusplus': 'off',
  },
  ignorePatterns: ['node_modules/', '*.js'],
};
