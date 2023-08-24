import { IntegerMother } from '../../src/primitives';

describe('Integer Mother', () => {
  it('should return a random integer between 0 and 100 when no arguments are passed', () => {
    const result = IntegerMother.random();
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(100);
    expect(Number.isInteger(result)).toBe(true);
  });
});
