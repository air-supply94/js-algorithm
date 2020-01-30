/**
 * Created by joey on 2018/8/28
 */
import toInteger from '../toInteger';

export default function toLength(x?: any): number {
  const MAX_ARRAY_INDEX = 4294967295;
  x = toInteger(x);
  if (x < 0) {
    return 0;
  } else if (x > MAX_ARRAY_INDEX) {
    return MAX_ARRAY_INDEX;
  }
  return x;
}
