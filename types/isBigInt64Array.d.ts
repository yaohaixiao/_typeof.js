export default isBigInt64Array;
/**
 * 检测测试数据的数据类型是否为 BigInt64Array 类型。
 * ========================================================================
 * @method isBigInt64Array
 * @since 0.6.0
 * @category Typed Arrays
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 为 BigInt64Array 类型，返回 true，否则返回 false
 * @example
 *
 * const arr = [9007199254740992]
 * cong bigint64 = new BigInt64Array(42)
 *
 * isBigInt64Array(arr) // -> false
 * isBigInt64Array(bigint64) // -> true
 */
declare function isBigInt64Array(val: any): boolean;
