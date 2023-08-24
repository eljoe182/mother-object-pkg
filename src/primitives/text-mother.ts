import { Mother } from '../mother';

export const TextMother = {
  random(words: number = 5): string {
    return Mother.create().sentence({ words });
  },
};
