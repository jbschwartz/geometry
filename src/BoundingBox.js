import Point from './Point'

export default class BoundingBox {
  constructor(min, max) {
    this.min = min || null;
    this.max = max || null;
  }

  get width() {
    return (this.max.x - this.min.x);
  }

  get height() {
    return (this.max.y - this.min.y);
  }

  split(at) {
    let low, high;

    if(at.x !== undefined) {
      low = new BoundingBox(this.min, new Point(at.x, this.max.y));
      high = new BoundingBox(new Point(at.x, this.min.y), this.max);
    }

    return {
      low: low,
      high: high
    }
  }
}
