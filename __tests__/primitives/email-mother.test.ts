import { EmailMother } from '../../src/primitives';

describe('Email Mother', () => {
  it('should return a random email with the default domain "example.com"', () => {
    const email = EmailMother.random();
    expect(email).toMatch(/^[a-zA-Z0-9._%+-]+@example\.com$/);
  });

  it('should return a random email with the specified domain', () => {
    const domain = 'test.com';
    const email = EmailMother.random(domain);
    expect(email).toMatch(new RegExp(`^[a-zA-Z0-9._%+-]+@${domain}$`));
  });
});
