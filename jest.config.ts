export default {
  roots: ['<rootDir>/src']
  clearMocks: true,
  collectCoveraFrom: '<rootDir>/src/**/*.ts',
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}