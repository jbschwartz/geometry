import AXES from './Axes'

function next(axis) {
	return (axis == AXES.X) ? AXES.Y : AXES.X;
}

export default class KDTree {
  constructor(points) {
    this.points = points;
    this.root = this.branch(this.points);
  }

  branch(points, axis = AXES.X) {
    if(points.length === 0) return;

  	points.sort((a, b) => a[axis] - b[axis]);

    const middle = Math.floor(points.length / 2);
    let node = points[middle];

    node.left = this.branch(points.slice(0, middle), next(axis));
    node.right = this.branch(points.slice(middle + 1), next(axis));

    return node;
  }
}
