import BoundingBox from '../src/BoundingBox'
import Point from '../src/Point'

describe('BoundingBox', () => {
  const box = new BoundingBox();

  it('contains min and max variables', () => {
    expect(box.min).toBeDefined();
    expect(box.max).toBeDefined();
  });
});
