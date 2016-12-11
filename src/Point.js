export default class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distanceTo(point) {
    return Math.sqrt(
      Math.pow((this.x - point.x), 2) +
      Math.pow((this.y - point.y), 2)
    );
  }

  distanceToSq(point) {
    return (
      Math.pow((this.x - point.x), 2) +
      Math.pow((this.y - point.y), 2)
    );
  }

  equals(point) {
    return (this.x == point.x) && (this.y == point.y);
  }
}
