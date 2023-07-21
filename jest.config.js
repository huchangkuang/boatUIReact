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
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/__mocks__/file-mock.js",
    "\\.(css|less|sass|scss)$": "<rootDir>/test/__mocks__/object-mock.js",
  },
};

module.exports = config;