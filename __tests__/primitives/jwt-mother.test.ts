import { JwtMother } from '../../src/primitives';

describe('JWT Mother', () => {
  it('should return a string value from Jwt.random().value', () => {
    const result = JwtMother.random();
    expect(typeof result).toBe('string');
  });
});
