import { Mother } from '../mother';

export const PhoneMother = {
  random(): string {
    return Mother.create().phone();
  },
};
