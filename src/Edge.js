export default class Edge {
  constructor(start, end) {
    [this.start, this.end] = [start, end];
  }

  crosses(y) {
    if(this.start.y < this.end.y) {
      return (this.start.y <= y) && (this.end.y > y);
    } else {
      return (this.end.y <= y) && (this.start.y > y);
    }
  }

  isLeftOf(point) {
    const [x1, y1] = [this.start.x, this.start.y];
    const [x2, y2] = [this.end.x, this.end.y];
    return Math.sign((x2 - x1) * (point.y - y1) - (y2 - y1) * (point.x - x1)) < 0;
  }
}
