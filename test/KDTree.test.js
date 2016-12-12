import KDTree from '../src/KDTree'
import Point from '../src/Point'

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

  describe('branch', () => {
    it('splits in X by default', () => {
      expect(tree.root.direction).toEqual(AXES.X);
    });
  })

  it('contains a root node', () => {
    expect(tree.root).toBeDefined();
    expect(tree.root.equals(points[3])).toBeTruthy();
  });

  it('correctly creates a tree using median search', () => {
    expect(tree.root.left.equals(new Point(-1, 0))).toBeTruthy();
    expect(tree.root.left.left.equals(new Point(-1, -1))).toBeTruthy();
    expect(tree.root.left.right.equals(new Point(-1, 1))).toBeTruthy();

    expect(tree.root.right.equals(new Point(1, 0))).toBeTruthy();
    expect(tree.root.right.left.equals(new Point(1, -1))).toBeTruthy();
    expect(tree.root.right.right.equals(new Point(1, 1))).toBeTruthy();
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

  describe('add', () => {
    it('adds a point to tree', () => {
      const point = new Point(-2, 1);
      tree.add(point);

      expect(tree.root.left.right.left).toBeDefined();
      expect(tree.root.left.right.left.equals(point)).toBeTruthy();
    });
  });
});
