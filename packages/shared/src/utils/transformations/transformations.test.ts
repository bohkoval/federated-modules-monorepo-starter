import { swapObjectKeyValue } from './transformations';

describe('transformations', () => {
  test('should swap object key-value', () => {
    const obj = { a: 'x', b: 'y', c: 'z' };
    const result = swapObjectKeyValue(obj);
    expect(result).toEqual({ x: 'a', y: 'b', z: 'c' });
  });
});
