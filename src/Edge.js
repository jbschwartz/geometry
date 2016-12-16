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
}
