import { StringMother } from '../../src/primitives';

describe('String Mother', () => {
  it('should return a random string with default options when no argument is passed', () => {
    const result = StringMother.random();
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });
});
