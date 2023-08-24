import { Mother } from '../mother';

export const BooleanMother = {
  random(): boolean {
    return Mother.create().bool();
  },
};
