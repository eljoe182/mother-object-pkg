import { Chance } from 'chance';
import { Mother } from '../../src/mother';

describe('Mother creator', () => {
  it('should return a new instance of Chance when called', () => {
    const chance1 = Mother.create();
    const chance2 = Mother.create();

    expect(chance1).toBeInstanceOf(Chance);
    expect(chance2).toBeInstanceOf(Chance);
    expect(chance1).not.toBe(chance2);
  });
});
