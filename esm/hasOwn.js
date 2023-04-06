/**
 * 检测对象自身属性中是否具有指定的属性。
 * ========================================================================
 * @method hasOwn
 * @param {Object} obj - （必须）检测的目标对象
 * @param {String} prop - （必须）属性名
 * @returns {Boolean}
 */
const hasOwn = (obj, prop) => {
  if ( Object.prototype.hasOwnProperty ) {
    return obj && obj.hasOwnProperty && obj.hasOwnProperty( prop );
  } else {
    return !isUndefined( obj[ prop ] ) && obj.constructor.prototype[ prop ] !== obj[ prop ];
  }
}

export default hasOwn
