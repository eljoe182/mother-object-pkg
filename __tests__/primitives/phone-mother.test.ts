import { PhoneMother } from '../../src/primitives';

describe('Phone Mother', () => {
  it('should return a string', () => {
    const result = PhoneMother.random();
    expect(typeof result).toBe('string');
  });
});
