module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: ['./tsconfig.json']
  },
  plugins: [
    'react'
  ],
  rules: {
    'prefer-const': 'off',
    '@typescript-eslint/consistent-type-assertions': 0,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off'
  }
}
