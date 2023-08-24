import { RutMother } from '../../src/primitives';

describe('Rut Mother', () => {
  it('should return a string when called', () => {
    const result = RutMother.random();
    expect(typeof result).toBe('string');
  });

  it('should return a valid RUT when called', () => {
    const result = RutMother.random();
    const isValidRut = /^(\d{1,2})?\d{3}\d{3}[-][0-9kK]{1}$/.test(result);
    expect(isValidRut).toBe(true);
  });
});
