import getJestConfig from '@config/jest-config';
import type { Config } from 'jest';

export default async (): Promise<Config> => getJestConfig();
