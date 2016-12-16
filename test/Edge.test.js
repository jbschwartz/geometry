import Edge from '../src/Edge'
import Point from '../src/Point'

describe('Edge', () => {
  const upEdge = new Edge(new Point(0, 0), new Point(1, 1));
  const downEdge =  new Edge(new Point(1, 1), new Point(0, 0));
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
