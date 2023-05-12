import _type from './_type'
import { TYPES } from './enum'

/**
 * 检测测试数据是否为 Number 类型
 * ========================================================================
 * @method isNumber
 * @param {*} val - 要检测的数据
 * @returns {boolean} 'val' 是 Number 类型返回 true，否则返回 false
 */
const isNumber = (val) => {
  return _type(val) === TYPES.NUMBER
}

export default isNumber