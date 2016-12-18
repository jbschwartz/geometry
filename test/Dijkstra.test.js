import Dijkstra from '../src/Dijkstra'
import Point from '../src/Point'

describe('Dijkstra', () => {
  const [A, B, C, D, E, F, G] = [
    new Point(0, 0),
    new Point(5, 0),
    new Point(10, 0),
    new Point(8, 2),
    new Point(8, 0),
    new Point(8, -4),
    new Point(8, -2)
  ]

  A.connections = [B, C];
  B.connections = [A, D, E];
  C.connections = [A, E];
  D.connections = [B, E, F];
  E.connections = [B, C, D, G];
  F.connections = [D, G];
  G.connections = [E, F];

  const points = [A, B, C, D, E, F, G];
  const djikstra = new Dijkstra(points, A);

  describe('shortestPath', () => {
    it('returns an array with the shortest path through the graph', () => {
      let path = djikstra.shortestPath(F);
      let expected = [A, B, E, G, F];
      for(let i = 0; i < path.length; ++i) {
        expect(path[i].equals(expected[i])).toBeTruthy();
      }

      path = djikstra.shortestPath(C);
      expected = [A, C];
      for(let i = 0; i < path.length; ++i) {
        expect(path[i].equals(expected[i])).toBeTruthy();
      }
    });
  });
});
