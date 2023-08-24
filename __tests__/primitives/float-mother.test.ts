import { FloatMother } from '../../src/primitives';

describe('Float Mother', () => {
  it('should return a random floating number between 0 and 100 with 2 decimal places by default', () => {
    const result = FloatMother.random();
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(100);
  });
});
