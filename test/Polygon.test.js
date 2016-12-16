import Polygon from '../src/Polygon'
import Point from '../src/Point'

describe('Polygon', () => {
  const polygon = new Polygon([
    new Point(0, 0),
    new Point(1, 1),
    new Point(1, -1),
    new Point(-1, -1),
    new Point(-1, 1)
  ]);

  describe('contains', () => {
    it('returns true when the polygon contains the point', () => {
      const point = new Point(-0.25, 0.125);
      expect(polygon.contains(point)).toBeTruthy();
    });

    it('returns false when the polygon does not contain the point', () => {
      const p1 = new Point(0, 0.5);
      const p2 = new Point(-2, 0.5);

      expect(polygon.contains(p1)).toBeFalsy();
      expect(polygon.contains(p2)).toBeFalsy();
    });

    it('returns false when the point is null or undefined', () => {
      expect(polygon.contains()).toBeFalsy();
      expect(polygon.contains(null)).toBeFalsy();
    });
  });
});
