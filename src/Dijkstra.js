export default class Dijkstra {
	constructor(vertices, initial) {
		this.vertices = vertices;
		this.setInitial(initial);
	}

	setInitial(point) {
		// New initial point => invalidate the current graph
		this.isValid = false;
		this.initial = point;
	}

	shortestPath(goal) {
		if(!this.initial) throw "Initial point is required";
		if(!this.isValid) this.build();

		let current = goal;
		let path = [];

		do {
			path.push(current);
			current = current.previous;
		}
		while(current && current.distance >= 0);

		return path.reverse();
	}

	initializeDistances() {
		this.vertices.forEach(vertex => { vertex.distance = Infinity });
		this.initial.distance = 0;
	}

	build() {
		this.initializeDistances();

		let fringe = [];
		let current = this.initial;
		do {
			current.connections.forEach(neighbor => {
				const newDistance = current.distance + current.distanceTo(neighbor);
				if(newDistance < neighbor.distance) {
					neighbor.distance = newDistance;
					neighbor.previous = current;
					if(!neighbor.isInFringe) {
						neighbor.isInFringe = true;
						fringe.push(neighbor);
					}
				}
			})

			// Take the shortest node from the fringe list
			fringe.sort((a, b) => a.distance - b.distance);
			current = fringe.splice(0, 1)[0];
		} while(fringe.length > 0);

		this.isValid = true;
	}
}
