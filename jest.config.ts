const config = {
  transform: {
    '\\.(js|jsx)?$': 'babel-jest',
    '\\.(ts|tsx)$': 'ts-jest',
  },
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'json'],
  testMatch: ['<rootDir>/**/*.test.ts', '<rootDir>/**/*.test.tsx'],
  moduleNameMapper: {},
};

module.exports = config;
