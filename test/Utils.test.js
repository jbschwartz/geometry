import * as Utils from '../src/Utils'

describe('Utils', () => {
  const testGenerator = (number) => { return () => number } ;

  const random = (min, max, number) => Utils.random(min, max, testGenerator(number));

  describe('random', () => {
    it('generates a random number between min and max', () => {
      const min = -2;
      const max = 2;
      const median = (min + max) / 2;

      expect(random(min, max, 0)).toBe(min);
      expect(random(min, max, 0.5)).toBe(median);
      expect(random(min, max, 1)).toBe(max);
    });
    
    it('defaults to a range between 0 and 1', () => {
      expect(random(null, null, 0)).toBe(0);
      expect(random(null, null, 0.5)).toBe(0.5);
      expect(random(null, null, 1)).toBe(1);
    });
  });
});
