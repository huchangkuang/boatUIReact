const base = require('./jest.config')

const config = Object.assign({}, base, {
  reporters: ["jest-junit"],
  collectCoverage: true,
  coverageDirectory: "./coverage",
  coverageProvider: "v8",
  coverageThreshold: {
    "global": {
      "branches": 1,
      "functions": 1,
      "lines": 1,
      "statements": 1
    }
  },
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/*.d.ts',
    '!./lib/index.tsx',
    '!./example/**',
  ],
});

module.exports = config;