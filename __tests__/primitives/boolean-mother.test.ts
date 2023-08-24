import { BooleanMother } from '../../src/primitives';

describe('Boolean Mother', () => {
  it('should return a boolean value', () => {
    const result = BooleanMother.random();
    expect(typeof result).toBe('boolean');
  });
});
