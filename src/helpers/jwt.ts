import { sign } from 'jsonwebtoken';

export class Jwt {
  readonly value: string;

  constructor(value: string) {
    this.value = value;
  }

  static random(): Jwt {
    return new Jwt(sign({ test: 'test' }, 'secretPassword') as unknown as string);
  }

  toString(): string {
    return this.value;
  }
}
