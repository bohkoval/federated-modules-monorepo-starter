import { jest } from '@jest/globals';
import {
  Button,
  MemeImage,
  InputWithLabel,
  SomeForm,
  swapObjectKeyValue,
  client,
  useFilms,
  useCountStore,
  api,
} from '@testing/shared';

// explicitly link shared to their actual implementation for tests
jest.mock('shared/components/Button', () => Button, { virtual: true });
jest.mock('shared/components/MemeImage', () => MemeImage, { virtual: true });
jest.mock('shared/components/InputWithLabel', () => InputWithLabel, { virtual: true });
jest.mock('shared/components/SomeForm', () => SomeForm, { virtual: true });
jest.mock('shared/utils/transformations', () => ({ swapObjectKeyValue }), { virtual: true });
jest.mock('shared/utils/api', () => ({ api }), { virtual: true });
jest.mock('shared/queries/client', () => client, { virtual: true });
jest.mock('shared/queries/useFilms', () => useFilms, { virtual: true });
jest.mock(
  'shared/stores/count',
  () => ({
    useCountStore,
  }),
  { virtual: true }
);
