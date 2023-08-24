import { Jwt } from '../../src/helpers';

describe('JWT helper', () => {
  it('should create Jwt instance with valid value', () => {
    const jwt = new Jwt('validValue');
    expect(jwt.value).toBe('validValue');
  });
});
