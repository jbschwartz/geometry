import Point from '../src/Point';

describe('Point', () => {
  const p1 = new Point(0, 0);
  const p2 = new Point(2, 0);
  const p3 = new Point(1, 1);

  describe('distanceTo', () => {
    it('correctly calculates distance to a point', () => {
      expect(p1.distanceTo(p2)).toBe(2);
      expect(p3.distanceTo(p1)).toBe(Math.sqrt(2));
    });
    it('is independent of order', () => {
      expect(p1.distanceTo(p3)).toBe(p3.distanceTo(p1));
    });
  });

  describe('distanceToSq', () => {
    it('correctly calculates squared distance to a point', () => {
      expect(p1.distanceToSq(p2)).toBe(4);
      expect(p3.distanceToSq(p1)).toBe(2);
    });
    it('is independent of order', () => {
      expect(p1.distanceToSq(p3)).toBe(p3.distanceToSq(p1));
    });
  });
});
