import { Mother } from '../mother';

export const DateMother = {
  random(toString: boolean = false): Date | string {
    return Mother.create().date({ string: toString });
  },
};
