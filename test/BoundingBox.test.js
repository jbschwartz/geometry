import BoundingBox from '../src/BoundingBox'
import Point from '../src/Point'

describe('BoundingBox', () => {
  const box = new BoundingBox(new Point(0, 0), new Point(10, 20));

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
});
