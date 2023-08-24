import { Rut } from '../../src/helpers';

describe('Rut Helper', () => {
  it('should return a valid RUT string when create() is called', () => {
    const rut = Rut.create();
    const regex = /^\d{7,8}-[0-9K]$/;
    expect(regex.test(rut)).toBe(true);
  });
});
