import { TextMother } from '../../src/primitives';

describe('Text Mother', () => {
  it('should return a string of 5 random words by default', () => {
    const result = TextMother.random();
    const words = result.split(' ');
    expect(words.length).toBe(5);
  });
});
