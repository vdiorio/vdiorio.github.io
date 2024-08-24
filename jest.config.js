module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
  testMatch: ["**/tests/**/*.(test|spec).(ts|tsx|js)"],
};
