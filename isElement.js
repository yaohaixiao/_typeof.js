import _type from './utils/_type'
import TYPES from './enum/types'
import isObjectLike from './isObjectLike'

/**
 * 检测测试数据的数据类型是否为 HTML 元素节点。
 * ========================================================================
 * @method isElement
 * @since 0.2.0
 * @category DOM
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 为 HTML 元素节点，返回 true，否则返回 false
 * @example
 *
 * const $list = document.getElementById('list')
 * const $div = document.createElement('div')
 * const $text = document.createTextNode('text')
 * const $items = document.querySelectorAll('.item')
 * const $fragment = document.createDocumentFragment()
 *
 * isElement($list) // -> true
 *
 * isElement($div) // -> true
 *
 * isElement($text) // -> false
 *
 * isElement($items) // -> false
 *
 * isElement($fragment) // -> false
 */
const isElement = (val) => {
  return isObjectLike(val) && val.nodeType === 1 && _type(val) === TYPES.ELEMENT
}

export default isElement
