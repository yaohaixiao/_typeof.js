import _type from './_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为 arguments 对象
 * ========================================================================
 * @method isArguments
 * @param {*} val - 要检测的数据
 * @return {Boolean} ‘val’ 是 Arguments 对象，返回 true，否则返回 false;
 */
function isArguments(val) {
  return _type(val) === TYPES.ARGUMENTS
}

export default isArguments
