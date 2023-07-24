const base = require('./jest.config')

const config = Object.assign({}, base, {
  reporters: ["jest-junit"],
  collectCoverage: true,
  coverageDirectory: "./coverage",
  coverageProvider: "v8",
  coverageThreshold: {
    "global": {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": 80
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