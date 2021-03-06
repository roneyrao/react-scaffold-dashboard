require('babel-register');

module.exports = {
  globals: {
    CFG: false,
    CFG_STRINGIFIED: false,
    CFG_TARGET: false,
    Debug: false,
    IsProduct: false,
    IsDevServer: false,
  },
  env: {
    node: true,
    jest: true,
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: require('./webpack.config.babel.js'), // alias
      },
    },
    'eslint-plugin-disable': {
      paths: {
        'jsx-a11y': ['*'],
      },
    },
  },
  rules: {
    'jsdoc/check-param-names': 1,
    'jsdoc/check-tag-names': 1,
    'jsdoc/check-types': 1,
    'jsdoc/newline-after-description': 1,
    'jsdoc/require-hyphen-before-param-description': 1,
    'jsdoc/require-param': 1,
    'jsdoc/require-param-description': 1,
    'jsdoc/require-param-name': 1,
    'jsdoc/require-param-type': 1,
    'jsdoc/require-returns-description': 1,
    'jsdoc/require-returns-type': 1,

    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-quotes': [1, 'prefer-single'],

    'no-console': 0,
    'global-require': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 0,

    'import/extensions': [
      {
        ignorePackages: true,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['*.js', '.*.js'],
      },
    ],
  },
  overrides: [
    {
      files: 'src/**/*.js',
      env: {
        browser: true,
      },
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: false,
          },
        ],
      },
    },
    {
      files: '*.test.js',
      env: {
        node: true,
        jest: true,
      },
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
          },
        ],
      },
    },
  ],
  plugins: ['jsdoc', 'disable'],
  extends: ['airbnb'],
};
