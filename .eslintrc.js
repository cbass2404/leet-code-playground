module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: 'standard',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['jest'],
  rules: {
    indent: 'off',
    'generator-star-spacing': 'off',
    'comma-dangle': 'off',
    semi: 'off',
    'space-before-function-paren': 'off',
    eqeqeq: 'off',
  },
  overrides: [
    {
      files: ['*.test.js'],
      rules: {
        'no-unused-expressions': 'off',
      },
    },
  ],
};
