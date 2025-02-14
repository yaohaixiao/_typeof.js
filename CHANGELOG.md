# [2.7.0](https://github.com/yaohaixiao/types.js/compare/2.6.0...2.7.0) (2025-02-12)


### Features

* 添加 isFalsy() 方法； ([dd8a48b](https://github.com/yaohaixiao/types.js/commit/dd8a48b545d6f6539a7f85c6703fc96baf2e572d))
* 添加 isHTMLElement() 方法 ([0819e57](https://github.com/yaohaixiao/types.js/commit/0819e57a872bc4b65dd4b3f4a2a9c43d2a3874a2))
* 添加 isNaN() 方法； ([1c43923](https://github.com/yaohaixiao/types.js/commit/1c439235ed728684095261120db060ef66b1116e))
* 添加 isNil() 方法； ([9d11c1a](https://github.com/yaohaixiao/types.js/commit/9d11c1ad85286b89a93871dc23cdd3cd0b3e69e0))
* 添加 isNode() 方法； ([38bdc71](https://github.com/yaohaixiao/types.js/commit/38bdc71f8b342e2baee9e9a2892c90c8e4dd9a1c))
* 添加 isSafeInteger() 方法； ([8cf1aeb](https://github.com/yaohaixiao/types.js/commit/8cf1aeb4ac0140f1b29ab2338886dad9fcf43d20))
* 添加 isShadowRoot() 方法； ([3a96608](https://github.com/yaohaixiao/types.js/commit/3a96608f949183c3b316cde282e2150f89602c7d))
* 添加 isStream() 方法； ([86e1e1c](https://github.com/yaohaixiao/types.js/commit/86e1e1cd773c8cd5bb77a3e522233c4cc74a0fbe))
* 添加 isWindow() 方法； ([d80d099](https://github.com/yaohaixiao/types.js/commit/d80d0992f43ff232fe39e6c4777afebe799cd1ee))



# [2.6.0](https://github.com/yaohaixiao/types.js/compare/2.5.1...2.6.0) (2025-02-09)


### Features

* 更新 is() 方法，可以判断 ID number 格式的字符串； ([dbfe95f](https://github.com/yaohaixiao/types.js/commit/dbfe95f01b0e0ce6c458303e434f35a8b3347a49))
* 更新 isEmpty() 方法，扩展功能，可以检测空数组，空对象，空的 arguments 对象等； ([b1e934f](https://github.com/yaohaixiao/types.js/commit/b1e934f08c81615ded6a5dc5d19912587a958b09))
* 更新 isSymbol() 和 isBigInt() 方法的校验方法 ([a5de32a](https://github.com/yaohaixiao/types.js/commit/a5de32a2349ea6254c0812c3ac749f4ce25d324a))
* 添加 isEmptyArguments() 和 isPrimitive() 方法 ([6479452](https://github.com/yaohaixiao/types.js/commit/64794523c3b5ddfcaebe94f7a3510b0757279c0a))
* 添加 isHosted() 和 isInstance() 方法； ([7e25408](https://github.com/yaohaixiao/types.js/commit/7e25408567e5024b1c387f9cff648f23562d4129))
* 添加 isIDNumber() 方法; ([4b68801](https://github.com/yaohaixiao/types.js/commit/4b68801dda27344d41b175b1ad26257ff614ace3))



## [2.5.1](https://github.com/yaohaixiao/types.js/compare/2.5.0...2.5.1) (2025-02-07)


### Bug Fixes

* 修复 isConstructor() 方法验证 null 时检测报错的问题 ([d094ca1](https://github.com/yaohaixiao/types.js/commit/d094ca15c78e9b6ddf8697d1de672ef2a33aa94c))


### Features

* 调整 isPrototype.js ([fc48b21](https://github.com/yaohaixiao/types.js/commit/fc48b2140e2e79c213514183e98a96cf47eedf39))



# [2.5.0](https://github.com/yaohaixiao/types.js/compare/2.4.0...2.5.0) (2024-07-06)


### Features

* 添加 .d.ts 文件定义，支持 ts ([541f818](https://github.com/yaohaixiao/types.js/commit/541f818ba8934dab6702ea31308b117cebc2e98b))



# [2.4.0](https://github.com/yaohaixiao/types.js/compare/2.3.0...2.4.0) (2024-07-04)


### Features

* 生成单独方法的 umd 模块 ([a8c3119](https://github.com/yaohaixiao/types.js/commit/a8c3119cd78b06a93a42e90f17cd4ef8b1c0ccbf))



# [2.3.0](https://github.com/yaohaixiao/types.js/compare/2.2.0...2.3.0) (2024-07-03)


### Features

* 调整发布模块，只有 types.min.js 模块了 ([531f25c](https://github.com/yaohaixiao/types.js/commit/531f25ca37517fa551cc3c4d2f363c6fdb27c713))



# [2.2.0](https://github.com/yaohaixiao/types.js/compare/2.1.0...2.2.0) (2024-03-21)


### Features

* 将 object 分类中关于 DOM 检测的方法提取到 DOM 分类 ([8866c95](https://github.com/yaohaixiao/types.js/commit/8866c951ed90a054c1ac1164e33b099c3a07652b))



# [2.1.0](https://github.com/yaohaixiao/types.js/compare/2.0.1...2.1.0) (2024-01-23)


### Features

* 1. 添加 isAlpha() 和 isPrime() 方法；
* 2. 添加 isUUID() 方法，将 isGuid() 方法调整为 isUUID() 方法的别名； ([1880053](https://github.com/yaohaixiao/types.js/commit/18800535db13031ed1a6eb377bf1687d122d1b6f))



## [2.0.1](https://github.com/yaohaixiao/types.js/compare/2.0.0...2.0.1) (2023-12-04)


### Bug Fixes

* 修复 isURL() 方法判断可能出现的错误 ([5b1cacb](https://github.com/yaohaixiao/types.js/commit/5b1cacbf0936cdae3ccbf44b2ae5da57d642ad85))



# [2.0.0](https://github.com/yaohaixiao/types.js/compare/1.11.0...2.0.0) (2023-08-27)


### Features

* 2.0.0 版本调整 API 接口模式，将 Types 改造为函数，返回检车 Types(val) 数据的方法，以前的方法调整为 Types 函数对象的静态方法 ([f41dd3f](https://github.com/yaohaixiao/types.js/commit/f41dd3f1d6252720ac0f50f39eca5eec30ebadec))



# [1.11.0](https://github.com/yaohaixiao/types.js/compare/1.10.0...1.11.0) (2023-08-07)


### Features

* 添加 isBinary() 方法和 isSVG() 方法 ([83a291e](https://github.com/yaohaixiao/types.js/commit/83a291e847650a74e275b7d46da778c8bf91d1a0))



# [1.10.0](https://github.com/yaohaixiao/types.js/compare/1.9.1...1.10.0) (2023-08-02)


### Features

* 调整 isURL() 方法的正则表达式，以支持除 http(s) 以外的其它协议的 URL 地址 ([31b9051](https://github.com/yaohaixiao/types.js/commit/31b9051119640ee60e3715b17679368bc2384d8c))



## [1.9.1](https://github.com/yaohaixiao/types.js/compare/1.9.0...1.9.1) (2023-07-26)


### Bug Fixes

* 修复 isConstructor() 判断一些 JavaScript 内置对象报错的问题，调整判断逻辑；调整 isURL() 方法针对URL地址的正则表达式，使检测更加准确； ([2137ff4](https://github.com/yaohaixiao/types.js/commit/2137ff433e53f5872308b281a34f2f34693298af))



# [1.9.0](https://github.com/yaohaixiao/types.js/compare/1.8.1...1.9.0) (2023-07-20)


### Features

* 添加 isDOM() 方法 ([4901433](https://github.com/yaohaixiao/types.js/commit/4901433fadbaf9b4c1423ec2a7407d6cfbbcf2fc))



## [1.8.1](https://github.com/yaohaixiao/types.js/compare/1.8.0...1.8.1) (2023-07-15)


### Bug Fixes

* 调整 isPlainObject() 方法的校验逻辑 ([34634e3](https://github.com/yaohaixiao/types.js/commit/34634e39da03186ad5b9a5675446715a550686be))



# [1.8.0](https://github.com/yaohaixiao/types.js/compare/1.7.0...1.8.0) (2023-07-11)


### Features

* 调整 is() 代码结构，添加新的类型输出：base64、IP address、hex、vnode ([c3e77b9](https://github.com/yaohaixiao/types.js/commit/c3e77b980167b84e011793d9594a8acfa4e62ece))



# [1.7.0](https://github.com/yaohaixiao/types.js/compare/1.6.0...1.7.0) (2023-07-11)


### Features

* 1. 增加 is() 方法输出类型的数量；2. 将 isXML() 方法调整到 object 子模块； ([a01c1ba](https://github.com/yaohaixiao/types.js/commit/a01c1ba24177572d8b7a5e80538aab1bf969565a))



# [1.6.0](https://github.com/yaohaixiao/types.js/compare/1.5.1...1.6.0) (2023-07-10)

### Features

* 添加 isBuffer() 方法



## [1.5.1](https://github.com/yaohaixiao/types.js/compare/1.5.0...1.5.1) (2023-07-10)


### Bug Fixes

* 修复 isURL() 方法无法判断有授权信息和类似 http://localhost 地址的问题 ([7d3baf7](https://github.com/yaohaixiao/types.js/commit/7d3baf78ae88b004fea7890deac9c57dd6b50e3e))



# [1.5.0](https://github.com/yaohaixiao/types.js/compare/1.4.1...1.5.0) (2023-07-10)


### Features

* 1. 重构 _typeof() 方法，降低代码复杂度，提高可维护新；2. 给 lang 模块添加新方法（isPromise、isEmail、isURL、isHTML 、isUUID、isIPAddress 和 isPhoneNumber 方法 ([417c4aa](https://github.com/yaohaixiao/types.js/commit/417c4aacc41ef5c3b25e7f4856c6f054ac6f54cd))



## [1.4.1](https://github.com/yaohaixiao/types.js/compare/1.4.0...1.4.1) (2023-07-10)


### Bug Fixes

* 修复 isGuid() 无法识别 windows 系统中的无连接符的 guid 格式，并调整 isTime() 方法 ([3fa0959](https://github.com/yaohaixiao/types.js/commit/3fa09592246f1696ce4912ad880ba1555d17bdf7))



# [1.4.0](https://github.com/yaohaixiao/types.js/compare/1.3.0...1.4.0) (2023-07-08)


### Features

* 添加 isTime() 方法



# [1.3.0](https://github.com/yaohaixiao/types.js/compare/1.2.0...1.3.0) (2023-07-06)


### Bug Fixes

* 修复 isConstructor() 方法判断 Promise 构造函数错误的问题 ([af8e419](https://github.com/yaohaixiao/types.js/commit/af8e41983d49a3bd8d67d25f55cb9e90d964a43b))


### Features

* 添加 isPromise() 方法 ([a1bdbc6](https://github.com/yaohaixiao/types.js/commit/a1bdbc63e4587bc8f862c2f7ca09030efa306c47))



# [1.2.0](https://github.com/yaohaixiao/types.js/compare/1.1.0...1.2.0) (2023-07-05)


### Features

* 添加 isChinese() 方法 ([b3cce4e](https://github.com/yaohaixiao/types.js/commit/b3cce4e302e8ea15c4a2e0fa7eea140dd035ee9a))



## [1.0.1](https://github.com/yaohaixiao/types.js/compare/1.0.0...1.0.1) (2023-07-02)


### Bug Fixes

* 修复 isTypedArray() 方法无法正确判断 BigInt64Array 和 BigUint64Array 类型的问题 ([47bc1f3](https://github.com/yaohaixiao/types.js/commit/47bc1f34db9e556b8b23ddd24a352e5fd8b2f57c))



# [1.0.0](https://github.com/yaohaixiao/types.js/compare/0.6.0...1.0.0) (2023-07-02)


### Features

* 发布 1.0.0 版本 ([3b742b5](https://github.com/yaohaixiao/types.js/commit/3b742b52ff1e498f7170fc5095f46907caea9c0b))



# [0.6.0](https://github.com/yaohaixiao/types.js/compare/0.5.0...0.6.0) (2023-07-01)


### Features

* 添加 isBigInt()、isBigInt64Array()、isBigUint64Array()和isFragment() 方法 ([60c2023](https://github.com/yaohaixiao/types.js/commit/60c2023220742330df0a30e527e4ea273dee150e))



# [0.5.0](https://github.com/yaohaixiao/types.js/compare/0.4.0...0.5.0) (2023-06-30)


### Features

* 添加 isEmptyArray() 和 isHTML() 方法，并进一步完善单测 ([f10e27b](https://github.com/yaohaixiao/types.js/commit/f10e27b21ec2b509a684e464f67113fc8e1cede2))



# [0.4.0](https://github.com/yaohaixiao/types.js/compare/0.3.0...0.4.0) (2023-06-30)


### Features

* 添加 isHash() 方法，并添加完善 API 文档 和 README.md ([f889fd9](https://github.com/yaohaixiao/types.js/commit/f889fd9a17db5f850f51ad1090f0c74e2676a893))



# [0.3.0](https://github.com/yaohaixiao/types.js/compare/0.2.2...0.3.0) (2023-06-29)


### Features

* 完成全部代码的单测，完善 API 文档的示例代码 ([e71f32e](https://github.com/yaohaixiao/types.js/commit/e71f32ea7b83639d1fd16001f762047fdd5eb28d))



## [0.2.2](https://github.com/yaohaixiao/types.js/compare/0.2.1...0.2.2) (2023-06-29)


### Bug Fixes

* 修复 isConstructor() 方法中判断 isFunction 的逻辑错误问题 ([f60843e](https://github.com/yaohaixiao/types.js/commit/f60843e62e627462d0ad86248d4e2a8fb87d2f06))



## [0.2.1](https://github.com/yaohaixiao/types.js/compare/0.2.0...0.2.1) (2023-06-28)


### Bug Fixes

* 修复 is() （实际是_type()）方法，判断 arguments 类型数据不正确的问题 ([805635f](https://github.com/yaohaixiao/types.js/commit/805635fb5394a2046446552491ccfa7925a329a9))



# [0.2.0](https://github.com/yaohaixiao/types.js/compare/0.1.0...0.2.0) (2023-06-28)

### 初始化版本

- 初始化 0.2.0 版本；
- 添加完整的文档；
- 添加代码规范检测；
- 添加单元测试；
- 添加代码提交预校验；
