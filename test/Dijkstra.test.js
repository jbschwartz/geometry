import Dijkstra from '../src/Dijkstra'
import Point from '../src/Point'

function equals(a, b) {
  if(a.length != b.length) return false;

  for(let i = 0; i < a.length; ++i) {
    if(!a[i].equals(b[i])) return false;
  }

  return true;
}

describe('Dijkstra', () => {
  const [A, B, C, D, E, F, G, H] = [
    new Point(0, 0),
    new Point(5, 0),
    new Point(10, 0),
    new Point(8, 2),
    new Point(8, 0),
    new Point(8, -4),
    new Point(8, -2),
    new Point(10, -4)
  ]

  A.connections = [B, C];
  B.connections = [A, D, E];
  C.connections = [A, E];
  D.connections = [B, E, F];
  E.connections = [B, C, D, G];
  F.connections = [D, G, H];
  G.connections = [E, F];
  H.connections = [F];

  const points = [A, B, C, D, E, F, G, H];
  const dijkstra = new Dijkstra(points, A);

  describe('shortestPath', () => {
    it('returns an array with the shortest path through the graph', () => {
      let path = dijkstra.shortestPath(F);
      let expected = [A, B, E, G, F];
      expect(equals(path, expected)).toBeTruthy();

      path = dijkstra.shortestPath(C);
      expected = [A, C];
      expect(equals(path, expected)).toBeTruthy();
    });

    it('handles nodes with one connection', () => {
      let path = dijkstra.shortestPath(H);
      let expected = [A, B, E, G, F, H];

      expect(equals(path, expected)).toBeTruthy();
    });
  });
});
