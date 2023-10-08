const config = {
  verbose: true,
  reporters: ["default"],
  setupFilesAfterEnv: ["./setupTests.js"],
  modulePathIgnorePatterns: ["<rootDir>/docs/"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/__mocks__/file-mock.js",
    "\\.(css|less|sass|scss)$": "<rootDir>/test/__mocks__/object-mock.js",
  },
};

module.exports = config;