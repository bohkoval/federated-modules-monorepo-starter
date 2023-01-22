import type { Config } from 'jest';

// separate jest config for CDK
export default async (): Promise<Config> => {
  return {
    testEnvironment: 'node',
    roots: ['<rootDir>/test'],
    testMatch: ['**/*.test.ts'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
  };
};
