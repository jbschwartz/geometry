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
}
