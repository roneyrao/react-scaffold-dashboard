module.exports = {
  bail: true,
  verbose: true,

  globals: {
    API_PREFIX: '',
    PUBLIC_PATH: '/',
  },

  collectCoverage: true,
  // collectCoverageFrom: ['src/**/*.js'],

  roots: ['<rootDir>/src/'],
  moduleFileExtensions: ['js'],
  moduleNameMapper: {
    // "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    '\\.(css)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.js$': 'babel-jest', // implicitly applied if no 'transform' specified;
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/static-file-transformer.js',
  },
  setupTestFrameworkScriptFile: '<rootDir>/jest/setup-framework.js',
};
