/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  automock: false,
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['./tests/setupEnv.ts'],
  setupFilesAfterEnv: ['./tests/jest.setup.ts'],
  roots: ['<rootDir>/src'],
  workerIdleMemoryLimit: '512MB',
  maxWorkers: 1,
  maxConcurrency: 1,
  testMatch: ['**/*.spec.ts'],
  verbose: true,
  silent: false,
  passWithNoTests: true,
  detectOpenHandles: true,
  forceExit: true,
  testPathIgnorePatterns: ['/node_modules/', '.tmp', '.cache', 'dist', 'database'],
};
