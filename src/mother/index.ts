import Chance from 'chance';

export type { Chance };

export const Mother = {
  create: (): Chance.Chance => {
    return new Chance();
  },
};
