import { Mother } from '../mother';

export const IntegerMother = {
  random(min: number = 0, max: number = 100): number {
    return Mother.create().integer({ min, max });
  },
};
