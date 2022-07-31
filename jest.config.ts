const config = {
  preset: 'ts-jest',
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
    '\\.svg$': 'svg-jest',
  },
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testMatch: ['<rootDir>/**/*.test.ts', '<rootDir>/**/*.test.tsx'],
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleNameMapper: {
    '^@components/(.*)': '<rootDir>/src/components/$1',
    '^@themes/(.*)': '<rootDir>/src/themes/$1',
    '^@assets/(.*)': '<rootDir>/src/assets/$1',
    '^@tests/(.*)': '<rootDir>/src/tests/$1',
  },
};

export default config;
