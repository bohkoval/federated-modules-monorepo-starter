import type { Config } from 'jest';

export default async (): Promise<Config> => {
  return {
    roots: ['<rootDir>/src'],
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(tsx|ts)?$': 'ts-jest',
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    verbose: true,
  };
};
