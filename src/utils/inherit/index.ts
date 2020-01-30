import noop from '../noop';

export default function inherit(child: Function, parent: Function): Function {
  noop.prototype = parent.prototype;
  child.prototype = new noop();
  child.prototype.constructor = child;
  return child;
}
