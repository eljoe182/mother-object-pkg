import { Mother } from '../mother';

interface Options {
  protocol: string;
  domain: string;
  domain_prefix: string;
  path: string;
  extensions: string[];
}

export const UrlMother = {
  random(opts?: Partial<Options>): string {
    return Mother.create().url(opts);
  },
};
