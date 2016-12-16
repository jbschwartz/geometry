import Edge from './Edge'

export default class Polygon {
  constructor(vertices) {
    this.vertices = vertices;
  }

  // Implements winding number test
  contains(point) {
    if(!point) return false;
    // Iterate over _edges_
    let windingNumber = 0;
    for(let i = 0; i < this.vertices.length; ++i) {
      const start = this.vertices[i];
      const end = this.vertices[i + 1] || this.vertices[0];
      const edge = new Edge(start, end);

      if(edge.crosses(point.y)) {
        if(edge.isLeftOf(point)) {
          // Downward edge
          windingNumber++;
        } else {
          // Upward edge
          windingNumber--;
        }
      }
    }

    return windingNumber > 0;
  }
}
