import type { Config } from 'jest';
// types

import { compilerOptions } from './tsconfig.json';
// Typescript Config files

const pathsToModuleNameMapper = (
  paths: Record<string, string[]>,
  options: {
    prefix: string;
  }
): Record<string, string> =>
  Object.entries(paths).reduce(
    (previous, [alias, [path]]) => ({
      ...previous,
      [`^${alias}`.replace('*', '(.*)')]: `${options.prefix}/${path}`.replace('*', '$1'),
    }),
    {}
  );

const config: Config = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testMatch: [
    '<rootDir>/**/*.test.ts',
    '<rootDir>/**/*.test.tsx',
    '<rootDir>/**/*.spec.ts',
    '<rootDir>/**/*.spec.tsx',
  ],
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>',
  }),
};

export default config;
