import Point from '../src/Point';

describe('Point', () => {
  let p1, p2, p3, p4;
  beforeEach(() => {
    p1 = new Point(0, 0);
    p2 = new Point(2, 0);
    p3 = new Point(1, 1);
    p4 = new Point(0, 0);
  })

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

  describe('equals', () => {
    it('correctly compares point for geometric equality', () => {
      expect(p1.equals(p4)).toBeTruthy();
      expect(p1.equals(p2)).toBeFalsy();
    });
    it('ignores order', () => {
      expect(p4.equals(p1)).toBeTruthy();
      expect(p2.equals(p1)).toBeFalsy();
    });
    it('ignores changes to javascript object', () => {
      p1.someProperty = 'isNowDefined';
      expect(p1.equals(p4)).toBeTruthy();
    });
    it('returns false for comparison with a malformed Point', () => {
      const malformed = new Point(NaN, NaN);
      expect(p1.equals(malformed)).toBeFalsy();
    });
  })
});
