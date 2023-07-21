const config = {
  verbose: true,
  setupFilesAfterEnv: ["./setupTests.js"],
  collectCoverage: true,
  coverageDirectory: "./coverage",
  coverageProvider: "v8",
  coverageThreshold: {
    "global": {
      "branches": 100,
      "functions": 100,
      "lines": 100,
      "statements": 100
    }
  },
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/*.d.ts',
  ],
};

module.exports = config;