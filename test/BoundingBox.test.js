import BoundingBox from '../src/BoundingBox'
import Point from '../src/Point'

describe('BoundingBox', () => {
  const minPoint = new Point(0, 0);
  const maxPoint = new Point(10, 20);
  const box = new BoundingBox(minPoint, maxPoint);

  it('contains min and max variables', () => {
    expect(box.min).toBeDefined();
    expect(box.max).toBeDefined();
  });

  it('calculates width', () => {
    expect(box.width).toBe(10);
  });

  it('calculates height', () => {
    expect(box.height).toBe(20);
  });

  describe('split', () => {
    const boxes = box.split({ x: 5 });

    it('splits BoundingBox into low and high BoundingBoxes', () => {
      expect(boxes.low).toBeDefined();
      expect(boxes.high).toBeDefined();

      expect(boxes.low).toBeInstanceOf(BoundingBox);
      expect(boxes.high).toBeInstanceOf(BoundingBox);
    });

    it('splits along the x-axis', () => {
      expect(boxes.low.min).toEqual(minPoint);
      expect(boxes.low.max).toEqual(new Point(5, 20));

      expect(boxes.high.min).toEqual(new Point(5, 0));
      expect(boxes.high.max).toEqual(maxPoint);
    });
  });
});
