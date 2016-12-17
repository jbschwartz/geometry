import BoundingBox from './BoundingBox'
import Point from './Point'

function random(min = 0, max = 1, generator = Math.random) {
  min = min || 0;
  max = max || 1;
  generator = generator || Math.random;

  return generator() * (max - min) + min;
}

export { random }
