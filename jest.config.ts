const config = {
  preset: 'ts-jest',
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
  },
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testMatch: ['<rootDir>/**/*.test.ts', '<rootDir>/**/*.test.tsx'],
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '^@assets/(.*)': '<rootDir>/src/assets/$1',
    '^@components/(.*)': '<rootDir>/src/components/$1',
    '^@theme/(.*)': '<rootDir>/src/theme/$1',
  },
};

export default config;
