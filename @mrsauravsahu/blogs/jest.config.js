const tsconfig = require("./tsconfig.test.json")
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
      tsConfig: '<rootDir>/tsconfig.test.json'
    }
  },
  setupFiles: [
    "<rootDir>/jest.setup.ts"
  ],
  moduleNameMapper
};
