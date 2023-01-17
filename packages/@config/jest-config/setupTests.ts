import { jest } from '@jest/globals';
import { Button, MemeImage, InputWithLabel, swapObjectKeyValue } from '@testing/shared';

jest.mock('shared/components/Button', () => Button, { virtual: true });
jest.mock('shared/components/MemeImage', () => MemeImage, { virtual: true });
jest.mock('shared/components/InputWithLabel', () => InputWithLabel, { virtual: true });
jest.mock('shared/utils/transformations', () => ({ swapObjectKeyValue }), { virtual: true });
jest.mock('app1/App1', () => ({ swapObjectKeyValue }), { virtual: true });
jest.mock('app2/App2', () => ({ swapObjectKeyValue }), { virtual: true });
