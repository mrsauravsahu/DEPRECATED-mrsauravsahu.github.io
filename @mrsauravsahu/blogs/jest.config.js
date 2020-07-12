module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      packageJson: 'package.json'
    }
  },
  setupFiles: [
    "<rootDir>/jest.setup.ts"
  ]
};
