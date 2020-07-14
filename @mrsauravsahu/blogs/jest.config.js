const tsconfig = require("./tsconfig.json")
const moduleNameMapper = require("tsconfig-paths-jest")(tsconfig)

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      packageJson: 'package.json',
      tsConfig: '<rootDir>/tsconfig.json'
    }
  },
  setupFiles: [
    "<rootDir>/jest.setup.ts"
  ],
  moduleNameMapper,
  testPathIgnorePatterns: ["build/"],
  testRegex: "(((__e2e__)|(__tests__)).*|(\\.|/)(test|spec))\\.[jt]sx?$"
};
