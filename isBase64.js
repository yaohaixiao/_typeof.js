import isString from './isString'

/**
 * 检测测试数据是否为一个基于 base64 编码的字符串。
 * ========================================================================
 * @method isBase64
 * @param {*} val - 要检测的数据
 * @return {boolean} 'val' 是 base64 编码的字符串返回 true，否则返回 false
 */
const isBase64 = (val) => {
  const REGEXP_BASE64 = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/
  return isString(val) && (!val.length || REGEXP_BASE64.test(val))
}

export default isBase64