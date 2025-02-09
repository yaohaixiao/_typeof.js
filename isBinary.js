import isBuffer from './isBuffer'
import isString from './isString'

/**
 * 检测测试数据的数据类型是否为 BigUint64Array 类型。
 * ========================================================================
 * @method isBinary
 * @since 1.11.0
 * @param {*} buffer
 * @returns {Boolean}
 * @example
 *
 * const buffer = Buffer.alloc(15)
 *
 * isBinary('Z29vZA==') // -> false
 * isBinary(isArrayBuffer(8) // -> false
 *
 * isBinary(buffer) // -> true
 * isBinary(buffer.toString()) // -> true
 */
const isBinary = (buffer) => {
  let i

  if (!isBuffer(buffer) && !isString(buffer)) {
    return false
  }

  for (i = 0; i < 24; i += 1) {
    const charCode = isBuffer(buffer) ? buffer[i] : buffer.charCodeAt(i)

    if (charCode === 65533 || charCode <= 8) {
      return true
    }
  }

  return false
}

export default isBinary
