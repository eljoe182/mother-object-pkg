import { UrlMother } from '../../src/primitives';

describe('URL Mother', () => {
  it('should return a random URL string when called with no arguments', () => {
    const result = UrlMother.random();
    expect(typeof result).toBe('string');
    expect(result).toMatch(/^https?:\/\/[a-z0-9]+(\.[a-z0-9]+)*(:\d+)?(\/[^\s]*)?$/i);
  });
});
