module.exports = {
  extends: ['next/core-web-vitals', 'plugin:import/typescript'],
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    // project: './tsconfig.eslint.json',
  },
  rules: {
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/no-duplicates': 2,
    'import/order': [
      2,
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    '@next/next/no-img-element': 0,
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
    '@typescript-eslint/no-unused-vars': [
      1,
      { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
    ],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': [2, { allowHigherOrderFunctions: true }],
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/camelcase': 0,
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'prefer-arrow-callback': 2,
    'no-constant-condition': [2, { checkLoops: false }],
  },
  overrides: [
    {
      files: ['*.test.ts', 'src/test-utils/**.ts'],
      env: {
        jest: true,
      },
      rules: {
        '@typescript-eslint/ban-ts-comment': 0,
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
    'import/internal-regex': '^@',
  },
}
