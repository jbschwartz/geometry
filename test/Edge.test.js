import Edge from '../src/Edge'
import Point from '../src/Point'

describe('Edge', () => {
  const upEdge = new Edge(new Point(0, 0), new Point(1, 1));
  const downEdge =  new Edge(new Point(1, 1), new Point(0, 0));

  describe('isLeftOf', () => {
    const p1 = new Point(2, 0);
    const p2 = new Point(-2, 0);
    it('returns true when edge is to the left of point', () => {
      expect(upEdge.isLeftOf(p1)).toBeTruthy();
      expect(downEdge.isLeftOf(p2)).toBeTruthy();
    });

    it('returns false when edge is to the right of point', () => {
      expect(upEdge.isLeftOf(p2)).toBeFalsy();
      expect(downEdge.isLeftOf(p1)).toBeFalsy();
    });

    it('returns false when the point is on the edge', () => {
      const point = new Point(0, 0)
      expect(upEdge.isLeftOf(point)).toBeFalsy();
      expect(downEdge.isLeftOf(point)).toBeFalsy();
    });
  })

  describe('crosses', () => {
    it('returns true when edge crosses y-value', () => {
      expect(upEdge.crosses(0.5)).toBeTruthy();
      expect(downEdge.crosses(0.5)).toBeTruthy();
    });

    it('returns false when edge does not cross y-value', () => {
      expect(upEdge.crosses(2)).toBeFalsy();
      expect(downEdge.crosses(2)).toBeFalsy();

      expect(upEdge.crosses(-1)).toBeFalsy();
      expect(downEdge.crosses(-1)).toBeFalsy();
    });

    describe('up edges', () => {
      it('are starting point inclusive', () => {
        expect(upEdge.crosses(0)).toBeTruthy();
      });

      it('are ending point exclusive', () => {
        expect(upEdge.crosses(1)).toBeFalsy();
      });
    });

    describe('down edges', () => {
      it('are starting point exclusive', () => {
        expect(downEdge.crosses(1)).toBeFalsy();
      });

      it('are ending point inclusive', () => {
        expect(downEdge.crosses(0)).toBeTruthy();
      });
    });
  });
});
