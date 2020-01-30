/**
 * Created by joey on 2018/8/28
 */
import toFinite from '../toFinite';

export default function toInteger(x?: any): number {
  return Math.floor(toFinite(x));
}
