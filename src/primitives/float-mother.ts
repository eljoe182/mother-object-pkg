import { Mother } from '../mother';

export const FloatMother = {
  random(min: number = 0, max: number = 100, fixed: number = 2) {
    return Mother.create().floating({ min, max, fixed });
  },
};
