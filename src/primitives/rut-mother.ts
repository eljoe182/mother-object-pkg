import { Rut } from '../helpers/rut';

export const RutMother = {
  random(): string {
    return Rut.create();
  },
};
