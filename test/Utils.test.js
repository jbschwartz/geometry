import BoundingBox from '../src/BoundingBox'
import Point from '../src/Point'
import * as Utils from '../src/Utils'

describe('Utils', () => {
  const testNumberGenerator = (number) => { return () => number };
  const random = (min, max, number) => Utils.random(min, max, testNumberGenerator(number));

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

  describe('randomPoint', () => {
    const testPointGenerator = (number) => { return (min, max) => random(min, max, number) };
    const randomPoint = (boundingBox, number) => Utils.randomPoint(boundingBox, testPointGenerator(number));

    it('generates a random point in the supplied bounding box', () => {
      const boundingBox = new BoundingBox(new Point(-2, -2), new Point(4, 4));
      const result = randomPoint(boundingBox, 0.5);

      expect(result).toBeInstanceOf(Point);
      expect(result.equals(new Point(1, 1))).toBeTruthy();
    });

    it('defaults to a range between 0 and 1 in both axes', () => {
      const result = randomPoint(null, 0.5);
      expect(result.equals(new Point(0.5, 0.5))).toBeTruthy();
    });
  });
});
