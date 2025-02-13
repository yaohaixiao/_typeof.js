import _type from './utils/_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为 Float32Array 的数组
 * ========================================================================
 * @method isFloat32Array
 * @since 0.2.0
 * @category Typed Arrays
 * @param {*} val - （必须）待检测的数据
 * @returns {Boolean} 'val' 是 Float64Array 类型，返回 true，否则返回 false
 * @example
 *
 * const numbers = [ 2, 4 ]
 * let args
 *
 * function test(a){
 *   args = arguments
 *   return a === 'test'
 * }
 *
 * test()
 *
 * isFloat32Array(numbers) // -> false
 * isFloat32Array(new Array(32)) // -> false
 * isFloat32Array(args) // -> false
 * isFloat32Array(new Float32Array()) => true
 */
const isFloat32Array = (val) => {
  return _type(val) === TYPES.FLOAT32_ARRAY
}

export default isFloat32Array
