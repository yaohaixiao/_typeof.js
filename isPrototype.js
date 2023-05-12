import isFunction from './isFunction'

/**
 * 判断是否为 prototype 对象
 * ========================================================================
 * @method isPrototype
 * @param val
 * @returns {boolean}
 */
const isPrototype = (val) => {
  const OP = Object.prototype
  const Ctor = val && val.constructor
  const proto = (isFunction(Ctor) && Ctor.prototype) || OP

  return val === proto
}

export default isPrototype