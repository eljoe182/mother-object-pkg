import { Mother } from '../mother';

export const EmailMother = {
  random(domain: string = 'example.com'): string {
    return Mother.create().email({ domain });
  },
};
