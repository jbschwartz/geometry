import KDTree from '../src/KDTree'
import Point from '../src/Point'
import AXES from '../src/Axes'

function traverseAll(tree, visitor) {
  let recurse = (node) => {
    visitor(node);

    if(node.left) recurse(node.left);
    if(node.right) recurse(node.right);
  }

  recurse(tree.root);
}

describe('KDTree', () => {
  const points = [
    new Point(-1, 1),
    new Point(-1, 0),
    new Point(-1, -1),
    new Point(0.5, 0),
    new Point(1, 1),
    new Point(1, 0),
    new Point(1, -1)
  ]

  let tree;

  beforeEach(() => {
    tree = new KDTree(points);
  })

  it('contains a root node', () => {
    expect(tree.root).toBeDefined();
    expect(tree.root.equals(points[3])).toBeTruthy();
  });

  describe('add', () => {
    it('adds a point to tree', () => {
      const point = new Point(-2, 1);
      tree.add(point);

      expect(tree.root.left.right.left).toBeDefined();
      expect(tree.root.left.right.left.equals(point)).toBeTruthy();
    });
  });

  describe('branch', () => {
    it('assigns a split direction to each node', () => {
      traverseAll(tree, (node) => {
        expect(node.direction).toBeDefined();
      })
    });

    it('splits in X by default', () => {
      expect(tree.root.direction).toEqual(AXES.X);
    });

    it('correctly creates a tree using median search', () => {
      expect(tree.root.left.equals(new Point(-1, 0))).toBeTruthy();
      expect(tree.root.left.left.equals(new Point(-1, -1))).toBeTruthy();
      expect(tree.root.left.right.equals(new Point(-1, 1))).toBeTruthy();

      expect(tree.root.right.equals(new Point(1, 0))).toBeTruthy();
      expect(tree.root.right.left.equals(new Point(1, -1))).toBeTruthy();
      expect(tree.root.right.right.equals(new Point(1, 1))).toBeTruthy();
    });
  });

  describe('leaf nodes', () => {
    it('have no left child', () => {
      expect(tree.root.right.left.left).toBeUndefined();
      expect(tree.root.right.right.left).toBeUndefined();
      expect(tree.root.left.left.left).toBeUndefined();
      expect(tree.root.left.right.left).toBeUndefined();
    });

    it('have no right child', () => {
      expect(tree.root.right.left.right).toBeUndefined();
      expect(tree.root.right.right.right).toBeUndefined();
      expect(tree.root.left.left.right).toBeUndefined();
      expect(tree.root.left.right.right).toBeUndefined();
    });
  });

  describe('nearestNeighbors', () => {
    it('finds one neighbor by default', () => {
      const neighbor = tree.nearestNeighbors(new Point(-2, 2));
      expect(neighbor.length).toBe(1);
    });

    it('finds the nearest neighbor', () => {
      let neighbor = tree.nearestNeighbors(new Point(-2, 2))[0];
      expect(neighbor.equals(new Point(-1, 1))).toBeTruthy();

      neighbor = tree.nearestNeighbors(new Point(.45, .05))[0];
      expect(neighbor.equals(new Point(0.5, 0))).toBeTruthy();
    });

    it('returns N neighbors', () => {
      const N = 3;
      const neighbors = tree.nearestNeighbors(new Point(1, .5), N);
      expect(neighbors.length).toBe(N);
    });

    it('correctly finds the N nearest neighbors', () => {
      const neighbors = tree.nearestNeighbors(new Point(1, .5), 3);
      const expected = [new Point(0.5, 0), new Point(1, 0), new Point(1, 1)];
      expected.forEach(correct => {
        const found = neighbors.reduce((sum, neighbor) => {
          return (neighbor.equals(correct)) ? ++sum : sum;
        }, 0);
        expect(found).toBe(1);
      });
    });
  })
});
