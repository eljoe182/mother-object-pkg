import { Mother } from '../mother';

interface Options {
  length: number;
  casing: 'upper' | 'lower';
  alpha: boolean;
  numeric: boolean;
  symbols: boolean;
}

export const StringMother = {
  random(opts?: Partial<Options>): string {
    return Mother.create().string(opts);
  },
};
