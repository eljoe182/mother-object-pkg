import { DateMother } from '../../src/primitives';

describe('Date Mother', () => {
  it('should return a random Date object when called with no arguments', () => {
    const result = DateMother.random();
    expect(result instanceof Date).toBe(true);
  });

  it('should return a string representation of a random Date object when called with true argument', () => {
    const result = DateMother.random(true);
    expect(typeof result).toBe('string');
    expect(new Date(result)).not.toBeNull();
  });
});
