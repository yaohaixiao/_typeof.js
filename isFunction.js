import _type from './_type'
import { TYPES } from './enum'

/**
 * 检测测试数据是否为 Function 类型
 * ========================================================================
 * @method isFunction
 * @param {*} val - （必须）待检测的数据
 * @returns {Boolean} 'val' 是 Function 类型返回 true，否则返回 false
 */
const isFunction = (val) => {
  const type = _type(val)
  return type === TYPES.FUNCTION
}

export default isFunction