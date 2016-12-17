import BoundingBox from './BoundingBox'
import Point from './Point'

function random(min = 0, max = 1, generator = Math.random) {
  min = min || 0;
  max = max || 1;
  generator = generator || Math.random;

  return generator() * (max - min) + min;
}

const DEFAULT_BOX = new BoundingBox(
  new Point(0, 0),
  new Point(1, 1)
);

function randomPoint(boundingBox = DEFAULT_BOX, generator = random) {
  boundingBox = boundingBox || DEFAULT_BOX;
  
  return new Point(
    generator(boundingBox.min.x, boundingBox.max.x),
    generator(boundingBox.min.y, boundingBox.max.y)
  );
}

export { random, randomPoint }
