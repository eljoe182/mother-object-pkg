import { Jwt } from '../helpers/jwt';

export const JwtMother = {
  random(): string {
    return Jwt.random().value;
  },
};
