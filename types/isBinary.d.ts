export default isBinary;
/**
 * 检测测试数据的数据类型是否为 BigUint64Array 类型。
 * ========================================================================
 * @method isBinary
 * @since 1.11.0
 * @param {Buffer | String} buffer
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
declare function isBinary(buffer: Buffer | string): boolean;
