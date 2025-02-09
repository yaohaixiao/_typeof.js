export default isFragment;
/**
 * 检测测试数据的数据类型是否为 DocumentFragment 文档碎片。
 * ========================================================================
 * @method isFragment
 * @since 0.6.0
 * @category DOM
 * @param {DocumentFragment} val - 要检测的数据
 * @returns {Boolean} 'val' 为 DocumentFragment 文档碎片，返回 true，否则返回 false
 * @example
 *
 * const $list = document.getElementById('list')
 * const $div = document.createElement('div')
 * const $text = document.createTextNode('text')
 * const $items = document.querySelectorAll('.item')
 * const $fragment = document.createDocumentFragment()
 *
 * isFragment($list) // -> false
 *
 * isFragment($div) // -> false
 *
 * isFragment($text) // -> false
 *
 * isFragment($items) // -> false
 *
 * isFragment($items) // -> true
 */
declare function isFragment(val: DocumentFragment): boolean;
