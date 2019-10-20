module.exports = {
  root: true,

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2019,
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },

  env: {
    es6: true,
    browser: true,
    node: true
  },

  extends: [
    'standard'
  ],

  rules: {
    // --- allow async-await
    'generator-star-spacing': 'off',

    // --- allow paren-less arrow functions
    'arrow-parens': 'off',
    'one-var': 'off',
    'prefer-promise-reject-errors': 'off',

    // --- import options
    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',

    // --- custom settings
    'no-trailing-spaces': 'off',
    'template-curly-spacing': 'off',
    'brace-style': 'off',
    'no-template-curly-in-string': 'off',
    'no-return-await': 'off',
    'no-inner-declarations': 'off',
    'no-new': 'off',
    'no-unused-vars': 'off',

    // allow console.log during development only
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
