import AXES from './Axes'

function next(axis) {
	return (axis == AXES.X) ? AXES.Y : AXES.X;
}

export default class KDTree {
  constructor(points) {
    this.points = points;
    this.root = this.branch(this.points);
  }

	add(point) {
		let enter = (node) => {
			if(typeof(node) === 'undefined') return point;

			let branch = (point[node.direction] < node[node.direction]) ? 'left' : 'right';

			node[branch] = enter(node[branch]);

			return node;
		}

		this.root = enter(this.root);
	}

	nearestNeighbor(point) {
		let nearest = {
			point: null,
			value: Number.POSITIVE_INFINITY
		};

		let recurse = (node) => {
			if(!node) return;

			let candidateDistance = point.distanceToSq(node);
			if(candidateDistance < nearest.value) {
				nearest = {
					point: node,
					value: candidateDistance
				}
			}

			let distanceToSplit = point[node.direction] - node[node.direction];

			let [near, far] = (distanceToSplit < 0) ? ['left', 'right'] : ['right', 'left'];

			recurse(node[near]);

			if(Math.abs(distanceToSplit) < nearest.value) {
				recurse(node[far]);
			}
		}

		recurse(this.root);

		return nearest.point;
	}

  branch(points, axis = AXES.X) {
    if(points.length === 0) return;

  	points.sort((a, b) => a[axis] - b[axis]);

    const middle = Math.floor(points.length / 2);
    let node = points[middle];

    node.left = this.branch(points.slice(0, middle), next(axis));
    node.right = this.branch(points.slice(middle + 1), next(axis));
		node.direction = axis;

    return node;
  }
}
