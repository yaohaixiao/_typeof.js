# Types.js

[![npm version](https://img.shields.io/npm/v/@yaohaixiao/types.js)](https://www.npmjs.com/package/@yaohaixiao/types.js)
[![Github file size](https://img.shields.io/github/size/yaohaixiao/types.js/types.min.js.svg)](https://github.com/yaohaixiao/types.js/blob/master/types.min.js)
[![prettier code style](https://img.shields.io/badge/code_style-prettier-07b759.svg)](https://prettier.io)
[![Coverage](https://codecov.io/gh/yaohaixiao/types.js/branch/main/graph/badge.svg)](https://codecov.io/gh/yaohaixiao/types.js)
[![npm downloads](https://img.shields.io/npm/dm/@yaohaixiao/types.js)](https://npmcharts.com/compare/@yaohaixiao/types.js?minimal=true)
[![MIT License](https://img.shields.io/github/license/yaohaixiao/types.js.svg)](https://github.com/yaohaixiao/types.js/blob/master/LICENSE)

Types.js 专注于检测 JavaScript 数据类型的工具库。

## 项目初衷

编写 types.js 主要是为初学 JavaScript 的朋友了解在 JavaScript 如何进行数据类型检测。当然，types.js 也完全可以胜任在实际产品开发的应用。

## 特点

- 支持 UMD 规范，同时也提供 ES6 模块调用；
- 支持创建和绑定自定义事件，并且可以手动触发自定义事件；
- 原生 JavaScript 编写，无任何依赖；
- 采用 jQuery 链式调用语法，调用语法简洁方便；
- 文件体积小(Gzip：3KB)，加载速度快；

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](https://github.com/yaohaixiao/types.js/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://github.com/yaohaixiao/types.js/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://github.com/yaohaixiao/types.js/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://github.com/yaohaixiao/types.js/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](https://github.com/yaohaixiao/types.js/)</br>Opera |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| IE11, Edge                                                                                                                                                                                             | last 10 versions                                                                                                                                                                                         | last 10 versions                                                                                                                                                                                     | last 10 versions                                                                                                                                                                                     | last 10 versions                                                                                                                                                                                 |

## 安装说明

types.js 支持 UMD 规范和 ES6 的模块调用方式，既可以在 Node.js 环境中使用 npm 安装，也可以在浏览器中使用 script 标签引入到页面。

### npm 安装

```sh
# install from npmjs.com
npm i -S @yaohaixiao/types.js

# install from github.com
npm i -S @yaohaixiao/types.js --registry=https://npm.pkg.github.com
```

### 浏览器中调用

在浏览器中调用 types.js，可以选择调用 jsdelivr 提供的 CDN 服务中的文件，也可以使用本地的 types.js 文件。

#### CDN 调用 JS 文件

```html
<script src="https://cdn.jsdelivr.net/gh/yaohaixiao/types.js/types.min.js"></script>
```

#### 本地调用 JS 文件

```html
<script src="/path/to/types.min.js"></script>
```

### Node.js 中调用

```js
const Types = require('@yaohaixiao/types.js')

Types.is([]) // -> array
```

### ES6 模块中调用

```js
// 调用 Types 对象
import Types from '@yaohaixiao/types.js/esm/types'

Types.is([]) // -> array

// 调用特定方法
import isArray from '@yaohaixiao/types.js/esm/isArray'

isArray([]) // -> true
```


## [API Documentation](https://yaohaixiao.github.io/types.js/)

types.js 提供了很多实用的数据类型判断的方法，以下是一些常用的 API 示例，完整 API 文档请查阅：[https://yaohaixiao.github.io/types.js/](https://yaohaixiao.github.io/types.js/)。


### [is(val)](https://yaohaixiao.github.io/types.js/#method-is)

is(val) 方法返回检测数据的数据类型字符串：

* 'number' - 数字
* 'string' - 字符串
* 'boolean' - 布尔值
* 'null' - 空值
* 'undefined' - 未定义
* 'set' - Set
* 'weakset' - WeakSet
* 'map' - Map
* 'weakmap' - WeakMap
* 'symbol' - 数组
* 'array' - 数组
* 'arraybuffer' - 固定长度的二进制数据缓冲区
* 'int8array' - int8array 数组
* 'uint8array' - uint8array 数组
* 'uint8clampedarray' - uint8clampedarray 数组
* 'int16array' - int16array 数组
* 'uint16array' - uint16array 数组
* 'int32array' - int32array 数组
* 'uint32array' - uint32array 数组
* 'float32array' - float32array 数组
* 'float64array' - float64array 数组
* 'object' - 对象
* 'arguments' - （函数的）参数对象
* 'collection' - HTML NodeList 对象
* 'dataview' - DataView 视图
* 'date' - 日期
* 'error' - 错误
* 'function' - 函数
* 'regexp' - 正则表达式对象
* 'element' - HTML 元素节点
* 'text' - HTML 文本节点

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 is() 方法
// import is from '@yaohaixiao/types.js/esm/is'

let Example
let args
const buffer = new ArrayBuffer(8)
const dv = new DataView(buffer)

function test(age){
  args = arguments
  return age
}

test(40)

// 基础值类型
Types.is('types.js') // -> string
Types.is(2023) // -> number
Types.is(true) // -> boolean
Types.is(null) // -> null
Types.is(Example) // -> undefined

// Set/WeakSet/Map/WeakMap/Symbol
Types.is(new Set()) // -> set
Types.is(new WeakSet()) // -> weakset
Types.is(new Map()) // -> map
Types.is(new WeakMap()) // -> weakmap
Types.is(Symbol()) // -> symbol

// Object 对象相关
Types.is({}) // -> object
Types.is(new Object()) // -> object
Types.is(Object.create(null)) // -> object
Types.is(new String()) // -> object
Types.is(new Number()) // -> object
Types.is(new Boolean()) // -> object
Types.is(new Error()) // -> error
Types.is(new Date()) // -> data
Types.is(new RegExp('/s/')) // -> regexp
Types.is(/\s+/ig) // -> regexp
Types.is(() => {}) // -> function
Types.is(args) // -> arguments
Types.is(dv) // -> dataview
Types.is(document.querySelector('#list')) // -> element
Types.is(document.querySelectorAll('.item')) // -> coolection
Types.is(document.createTextNode('text')) // -> text

// Array 相关
Types.is([]) // -> array
Types.is(new ArrayBuffer(8)) // -> arraybubber
Types.is(new Int8Array([])) // -> int8array
Types.is(new Int16Array([])) // -> int16array
Types.is(new Int32Array([])) // -> int32array
Types.is(new Uint8Array([])) // -> uint8array
Types.is(new Uint8ClampedArray([])) // -> uint8clampedarray
Types.is(new Uint16Array([])) // -> uint16array
Types.is(new Uint32Array([])) // -> uint32array
Types.is(new Float32Array([])) // -> float32array
Types.is(new Float64Array([])) // -> float64array
```


### [isObject](https://yaohaixiao.github.io/types.js/#method-isObject)

isObject(val) 方法用来检测测试数据是否为对象。使用 isObject() 方法测试单体对象和函数都返回值都是 true。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 为对象返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isObject() 方法
// import isObject from '@yaohaixiao/types.js/esm/isObject'

// True
Types.isObject(function empty(){}) // -> true
Types.isObject({}) // -> true
Types.isObject(Object.create(null)) // -> true
Types.isObject(Object.create({})) // -> true
Types.isObject(new Function()) // -> true

// False
Types.isObject([]) // -> false
Types.isObject(null) // -> false
Types.isObject(document.getElementById('wrap')) // -> false
```


### [isFunction](https://yaohaixiao.github.io/types.js/#method-isFunction)

isFunction(val) 方法用来检测测试数据是否为 Function 类型。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Function 类型返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isFunction() 方法
// import isFunction from '@yaohaixiao/types.js/esm/isFunction'

Types.isFunction(function empty(){}) // -> true
Types.isFunction(parseInt) // -> true
Types.isFunction(Array) // -> true
Types.isFunction(Boolean) // -> true
Types.isFunction(Date) // -> true
Types.isFunction(Math) // -> false
Types.isFunction(Number) // -> true
Types.isFunction(Object) // -> true
Types.isFunction(RegExp) // -> true
Types.isFunction(String) // -> true
```


### [isArray](https://yaohaixiao.github.io/types.js/#method-isArray)

isArray(val) 方法用来检测测试数据的数据类型是否为 Array （数组）类型。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Array 类型返回 true，否则返回 false

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isArray() 方法
// import isArray from '@yaohaixiao/types.js/esm/isArray'

let args

function sum (a, b){
  args = arguments
  return a + b
}

sum(3, 4)

// True
Types.isArray([]) // -> true
Types.isArray(new Array()) // -> true
Types.isArray('this is string could split it into array'.split(' ')) // -> true

// False
// 虽然  arguments 对象看起来也像数组，但是它也不是数组
Types.isArray(args) // -> false
// 虽然 HTMLNodeList 的看起来像数组，但它并不是数组
Types.isArray(document.getElementsByTagName('li')) // -> false
Types.isArray({0:1,1:2}) // -> false
Types.isArray( new Int8Array() ) // -> false
```


### [isNumber](https://yaohaixiao.github.io/types.js/#method-isNumber)

isNumber(obj) 方法用来检测测试数据是否为 Number 类型。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Number 类型返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isNumber() 方法
// import isNumber from '@yaohaixiao/types.js/esm/isNumber'

Types.isNumber(2) // -> true
Types.isNumber(2.4) // -> true
Types.isNumber(.4) // -> true
Types.isNumber(0xffffff) // -> true
Types.isNumber(NaN) // -> true
Types.isNumber(Infinity) // -> true
Types.isNumber(-Infinity) // -> true
Types.isNumber('33') // -> false
```


### [isString](https://yaohaixiao.github.io/types.js/#method-isString)

isString(val) 方法用来检测测试数据是否为字符串。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是字符串返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isString() 方法
// import isString from '@yaohaixiao/types.js/esm/isString'

Types.isString('string') // -> true
Types.isString(String('string')) // -> true
Types.isString(new String('string')) // -> false
```


### [isBoolean](https://yaohaixiao.github.io/types.js/#method-isBoolean)

isBoolean(obj) 方法用来检测测试数据是否为 Boolean 类型

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Boolean 类型则返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isBoolean() 方法
// import isBoolean from '@yaohaixiao/types.js/esm/isBoolean'

let projects

Types.isBoolean(!!0) // -> true
Types.isBoolean(1) // -> false
Types.isBoolean(false) // -> true
Types.isBoolean(true) // -> true
Types.isBoolean(Boolean('1')) // -> true
Types.isBoolean(new Boolean('')) // -> false
Types.isBoolean('') // -> false
Types.isBoolean(null) // -> false
Types.isBoolean(NaN) // -> false
Types.isBoolean(projects) // -> false
Types.isBoolean(!!projects) // -> true
```


### [isNull](https://yaohaixiao.github.io/types.js/#method-isNull)

isNull(val) 方法用来检测测试数据是否为 null。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 为 null 返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isNull() 方法
// import isNull from '@yaohaixiao/types.js/esm/isNull'

let projects

Types.isNull(null) // -> true
Types.isNull({}) // -> false
Types.isNull(projects) // -> false
```


### [isUndefined](https://yaohaixiao.github.io/types.js/#method-isUndefined)

isUndefined(val) 方法用来检测测试数据是否 undefined（未定义）。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 undefined（未定义）返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isUndefined() 方法
// import isUndefined from '@yaohaixiao/types.js/esm/isUndefined'

let projects

Types.isUndefined(projects) // -> true
Types.isUndefined([]) // -> false
Types.isUndefined('') // -> false
Types.isUndefined(0) // -> false
Types.isUndefined(NaN) // -> false
Types.isUndefined({}) // -> false
```


### [isArguments](https://yaohaixiao.github.io/types.js/#method-isArguments)

isArguments(val) 方法用来检测测试数据是否为 arguments 对象。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 arguments 对象返回 true，否则返回 false

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isArguments() 方法
// import isArguments from '@yaohaixiao/types.js/esm/isArguments'

let argsOne
let argsTwo
const check = (b) => {
  // 箭头函数没有 arguments 对象
  argsTwo = arguments

  return b === 'check'
}

function test(a){
  argsOne = arguments

  return a === 'test'
}

test('test')
check('check')

Types.isArguments(argsOne) // -> true
Types.isArguments(argsTwo) // -> false
```


### [isArrayBuffer](https://yaohaixiao.github.io/types.js/#method-isArrayBuffer)

isArrayBuffer(val) 方法用来检测测试数据是否为 ArrayBuffer 类型。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 ArrayBuffer 类型返回 true，否则返回 false

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isArrayBuffer() 方法
// import isArrayBuffer from '@yaohaixiao/types.js/esm/isArrayBuffer'

Types.isArrayBuffer([]) // -> false
Types.isArrayBuffer(new ArrayBuffer(8)) // -> true
```


### [isArrayLike](https://yaohaixiao.github.io/types.js/#method-isArrayLike)

isArrayLike(val) 方法用来检测测试数据的数据类型是否为类似数组（array、arguments 对象或者 HTMLNodeList 对象）类型。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 array、arguments 或者 HTMLNodeList 类型返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isArrayLike() 方法
// import isArrayLike from '@yaohaixiao/types.js/esm/isArrayLike'

let args

function sum(a, b){
  args = arguments // -> true
  return a + b
}

sum(5, 6)

Types.isArrayLike([1, 2, 3, 4, 5]) // -> true
// arguments 对象是类似数组类型的数据
Types.isArrayLike(args) // -> true
// HTMLNodeList 是类似数组类型的数据
Types.isArrayLike(document.getElementsByTagName('li')) // -> true
Types.isArrayLike( new Int8Array() ) // -> false
```


### [isBase64](https://yaohaixiao.github.io/types.js/#method-isBase64)

isBase64(val) 方法用来检测测试数据是否为一个基于 base64 编码的字符串。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 base64 编码的字符串返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isBase64() 方法
// import isBase64 from '@yaohaixiao/types.js/esm/isBase64'

Types.isBase64('Z29vZA==') // -> true
Types.isBase64('aXNCYXNlNjQ=2') // -> false
```


### [isBlank](https://yaohaixiao.github.io/types.js/#method-isBlank)

isBlank(val) 方法用来检测测试数据是否只包空格。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 只包含空格返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isBlank() 方法
// import isBlank from '@yaohaixiao/types.js/esm/isBlank'

Types.isBlank('  ') // -> true
Types.isBlank(new String()) // -> false
Types.isBlank('') // -> true
```


### [isConstructor](https://yaohaixiao.github.io/types.js/#method-isConstructor)

isConstructor(fn) 方法用来检测测试函数是否为构造函数

#### Parameters

##### val

Type: `Function`

必选，要测试的（构造）函数。

#### Returns

Type: `Boolean`

fn 是构造函数返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isConstructor() 方法
// import isConstructor from '@yaohaixiao/types.js/esm/isConstructor'

const fn = function(){}
const ff = class {}

Types.isConstructor(fn) // -> true
Types.isConstructor(ff) // -> true
Types.isConstructor(console.log) // -> false

Types.isConstructor(Math) // -> false
Types.isConstructor(Boolean) // -> true
Types.isConstructor(Array) // -> true
Types.isConstructor(Function) // -> true
Types.isConstructor(Date) // -> true
Types.isConstructor(RegExp) // -> true
Types.isConstructor(Object) // -> true
```


### [isEmail](https://yaohaixiao.github.io/types.js/#method-isEmail)

isEmail(val) 方法用来检测测试数据是否为合法的 Email 格式。

#### Parameters

##### val

Type: `String`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Boolean 类型返回 true，否则返回 false

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isEmail() 方法
// import isEmail from '@yaohaixiao/types.js/esm/isEmail'

Types.isEmail('yaohaixiao@gmail.com') // => true
Types.isEmail('yaohaixiao@gmail.c') // => true
Types.isEmail('haixiao-yao@gmail.com') // => true
Types.isEmail('haixiao_yao@gmail.com') // => true
Types.isEmail('haixiao&yao@gmail.com') // => true
Types.isEmail('haixiao~yao@gmail.com') // => true
Types.isEmail('haixiao+yao@gmail.com') // => true
Types.isEmail('haixiao^yao@gmail.com') // => true
Types.isEmail('haixiao%yao@gmail.com') // => true
Types.isEmail('haixiao$yao@gmail.com') // => true
Types.isEmail('haixiao.yao@gmail.com') // => true
Types.isEmail('haixiao/yao@gmail.com') // => true
Types.isEmail('haixiao#yao@gmail.com') // => true
Types.isEmail('yao{haixiao@gmail.com') // => true
Types.isEmail('yao|haixiao@gmail.com') // => true
Types.isEmail('yao}haixiao@gmail.com') // => true
Types.isEmail('yaohaixiao#gmail.com') // => false
Types.isEmail('yao\haixiao@gmail.com') // => false
Types.isEmail('yao[haixiao@gmail.com') // => false
```


### [isEmptyObject](https://yaohaixiao.github.io/types.js/#method-isEmptyObject)

isEmptyObject(val) 方法用来检测测试数据是否为空（单体）对象。

#### Parameters

##### val

Type: `Object`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 为空（单体）对象，返回 true，否则返回 false

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isEmptyObject() 方法
// import isEmptyObject from '@yaohaixiao/types.js/esm/isEmptyObject'

function Person(name,age){
  this.name = name
  this.age = age
}

Types.isEmptyObject({}) // -> true
Types.isEmptyObject([]) // true
Types.isEmptyObject(Person) // true
Types.isEmptyObject(new Object()) // true
Types.isEmptyObject(new Boolean()) // true
Types.isEmptyObject(new Array()) // true
Types.isEmptyObject(new Date('2017-12-11')) // true
Types.isEmptyObject(new RegExp('\s+','ig')) // true
Types.isEmptyObject(new String()) // true
Types.isEmptyObject(new Function()) // false
Types.isEmptyObject(['']) // false
Types.isEmptyObject(null) // false
Types.isEmptyObject({name:'type.js'}) // -> false
Types.isEmptyObject(new Person('yaohaixiao',30)) // false
```


### [isElement](https://yaohaixiao.github.io/types.js/#method-isElement)

isElement(val) 方法用来检测测试数据的数据类型是否为 HTML 元素节点。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 为 HTML 元素节点返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isElement() 方法
// import isElement from '@yaohaixiao/types.js/esm/isElement'

const tagDiv = document.createElement('div')
const fragment = document.createDocumentFragment()
const textNode = document.createTextNode('text')

Types.isElement(tagDiv) // -> true
Types.isElement(fragment) // -> false
Types.isElement(textNode) // -> false
```


### [isEmpty](https://yaohaixiao.github.io/types.js/#method-isEmpty)

isEmpty(val) 方法用来检测测试数据是否为空字符串。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是空字符串返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isEmpty() 方法
// import isEmpty from '@yaohaixiao/types.js/esm/isEmpty'

Types.isEmpty('') // -> true
Types.isEmpty(String()) // -> true
Types.isEmpty(new String()) // -> false
Types.isEmpty(' ') // -> false
```


### [isEmptyObject](https://yaohaixiao.github.io/types.js/#method-isEmptyObject)

isEmptyObject(val) 方法用来检测测试数据是否为空（单体）对象。

#### Parameters

##### val

Type: `Any`
Default: `Object`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是空对象返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isEmptyObject() 方法
// import isEmptyObject from '@yaohaixiao/types.js/esm/isEmptyObject'

function Person(name,age){
  this.name = name
  this.age = age
}

Types.isEmptyObject({}) // -> true
Types.isEmptyObject([]) // true
Types.isEmptyObject(Person) // true
Types.isEmptyObject(new Object()) // true
Types.isEmptyObject(new Boolean()) // true
Types.isEmptyObject(new Array()) // true
Types.isEmptyObject(new Date('2017-12-11')) // true
Types.isEmptyObject(new RegExp('\s+','ig')) // true
Types.isEmptyObject(new String()) // true
Types.isEmptyObject(new Function()) // false
Types.isEmptyObject(['']) // false
Types.isEmptyObject(null) // false
Types.isEmptyObject({name:'type.js'}) // -> false
Types.isEmptyObject(new Person('yaohaixiao',30)) // false
```


### [isError](https://yaohaixiao.github.io/types.js/#method-isError)

isError(val) 方法用来检测测试数据是否为 Error 类型。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Error 类型返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isError() 方法
// import isError from '@yaohaixiao/types.js/esm/isError'

Types.isError({}) // -> false
Types.isError(new Error()) // -> true
```


### [isEven](https://yaohaixiao.github.io/types.js/#method-isEven)

isEven(val) 方法用来检测测试数据的数据类型是否为偶数。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是偶数返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isEven() 方法
// import isEven from '@yaohaixiao/types.js/esm/isEven'

Types.isEven(2) // -> true
Types.isEven(3) // -> false
Types.isEven(2.2) // -> false
```


### [isFloat](https://yaohaixiao.github.io/types.js/#method-isFloat)

isFloat(val) 方法用来检测测试数据是否为浮点数。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是浮点数返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isFloat() 方法
// import isFloat from '@yaohaixiao/types.js/esm/isFloat'

Types.isFloat(2.4) // -> true
Types.isFloat(Number("3.4556645445E7")) // -> true
Types.isFloat(Number("3.4556645445E10")) // -> false
Types.isFloat(2.0) // -> false
Types.isFloat(0xffffff) // -> false
Types.isFloat(NaN) // -> false
```


### [isHash](https://yaohaixiao.github.io/types.js/#method-isHash)

isHash(val) 方法用来检测测试数据是普通对象（它是方法 [isPlainObject](https://yaohaixiao.github.io/types.js/#isPlainObject) 的别名）。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是普通对象返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isHash() 方法
// import isHash from '@yaohaixiao/types.js/esm/isHash'

let udf

// 基础类型
Types.isHash(2) // -> false
Types.isHash('str') // -> false
Types.isHash(false) // -> false
Types.isHash(null) // -> false
Types.isHash(udf) // -> false

// 引用类型
Types.isHash(new Function()) // -> false
Types.isHash(function(){}) // -> false
Types.isHash(() => {}) // -> false
Types.isHash(class{}) // -> false

Types.isHash(new class{}) // -> true
Types.isHash({}) // -> true
Types.isHash(Object.create(null)) // -> true
Types.isHash(new Object()) // -> true
Types.isHash([]) // -> true
Types.isHash(/s+/ig) // -> true
Types.isHash(new String()) // -> true
Types.isHash(new Number()) // -> true
Types.isHash(new Boolean()) // -> true
Types.isHash(new Array()) // -> true
Types.isHash(new Date()) // -> true
```


### [isHex](https://yaohaixiao.github.io/types.js/#method-isHex)

isHex(val) 方法用来检测测试数据是否为 16 进制编码的字符串。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 16 进制编码的字符串返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isHex() 方法
// import isHex from '@yaohaixiao/types.js/esm/isHex'

Types.isHex('#ffffff') // -> true
Types.isHex('f3f3f3') // -> true
Types.isHex('#h1f1f1') // -> false
Types.isHex('sdadfa') // -> false
```


### [isHTMLCollection](https://yaohaixiao.github.io/types.js/#method-isHTMLCollection)

isHTMLCollection(val) 方法用来检测数据的是否为 HTMLNodeList 对象。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 HTMLNodeList 对象返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isHTMLCollection() 方法
// import isHTMLCollection from '@yaohaixiao/types.js/esm/isHTMLCollection'

Types.isHTMLCollection(document.getElementById('isJSON')) // -> false
Types.isHTMLCollection(document.getElementsByTagName('li')) // -> true
```


### [isInfinite](https://yaohaixiao.github.io/types.js/#method-isInfinite)

isInfinite(val) 方法用来检测测试数据的数据是正无穷或者负无穷。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是正无穷或者负无穷返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isInfinite() 方法
// import isInfinite from '@yaohaixiao/types.js/esm/isInfinite'

Types.isInfinite(2.4) // -> false
Types.isInfinite(Infinity) // -> true
```


### [isInteger](https://yaohaixiao.github.io/types.js/#method-isInteger)

isInteger(val) 方法用来检测测试数据是否为整数。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是整数返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isInteger() 方法
// import isInteger from '@yaohaixiao/types.js/esm/isInteger'

Types.isInteger(2.4) // -> false
Types.isInteger(2) // -> true
Types.isInteger(2.0) // -> true
Types.isInteger(0xffffff) // -> true
Types.isInteger(NaN) // -> false
Types.isInteger(Number("3.4556645445E7")) // -> false
```


### [isJSON](https://yaohaixiao.github.io/types.js/#method-isJSON)

isJSON(val) 方法用来检测测试数据是否为 JSON 格式字符串数据。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 JSON 格式字符串数据返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isJSON() 方法
// import isJSON from '@yaohaixiao/types.js/esm/isJSON'

// String
Types.isJSON('') // -> false
Types.isJSON("") // -> false
Types.isJSON("json") // -> true

// Number
Types.isJSON(3) // -> false
Types.isJSON("3") // -> true

// Boolean
Types.isJSON(false) // -> false
Types.isJSON("false") // -> true

// Object
Types.isJSON(null) // -> false
Types.isJSON("null") // -> true

Types.isJSON({ prop: 'JSON' }) // -> false
Types.isJSON("{\"prop\":\"JSON\"}") // -> true

// Array
Types.isJSON([1, 2, 3]) // -> false
Types.isJSON("[1, 2, 3]") // -> true
```


### [isMap](https://yaohaixiao.github.io/types.js/#method-isMap)

isMap(val) 方法用来检测测试数据是否为 Map 类型。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Map 类型返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isMap() 方法
// import isMap from '@yaohaixiao/types.js/esm/isMap'

const map = new Map([
    ['name', 'Robert'],
    ['Gender', 'Male']
])

Types.is(map) // -> 'map'

Types.isMap(map) // -> true
Types.isMap(['name','robert']) // -> false
```


### [isNativeFunction](https://yaohaixiao.github.io/types.js/#method-isNativeFunction)

isNativeFunction(fn) 方法用来检测测试函数是否为系统内置函数

#### Parameters

##### val

Type: `Function`

必选，要测试的函数。

#### Returns

Type: `Boolean`

fn 是系统内置函数返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isNativeFunction() 方法
// import isNativeFunction from '@yaohaixiao/types.js/esm/isNativeFunction'

const fn = function(){}
const ff = class {}
const f = () => console.log('no constructable')

Types.isNativeFunction(fn) // -> false
Types.isNativeFunction(ff) // -> false
Types.isNativeFunction(f) // -> false
Types.isNativeFunction(Math) // -> true
Types.isNativeFunction(Boolean) // -> true
Types.isNativeFunction(Array) // -> true
Types.isNativeFunction(Function) // -> true
Types.isNativeFunction(Date) // -> true
Types.isNativeFunction(RegExp) // -> true
Types.isNativeFunction(Object) // -> true
```


### [isNumeric](https://yaohaixiao.github.io/types.js/#method-isNumeric)

isNumeric(val) 方法用来检测测试数据是否是一个数字（只能是 number 类型或者 '123123' 这样的数字字符串）。

#### Parameters

##### val

Type: `Number|String`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是一个数字返回 true，否则返回false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isNumeric() 方法
// import isNumeric from '@yaohaixiao/types.js/esm/isNumeric'

Types.isNumeric(2) // -> true
Types.isNumeric(2.4) // -> true
Types.isNumeric(0xffffff) // -> true
Types.isNumeric('33') // -> true
Types.isNumeric('0xffffff') // -> true
Types.isNumeric(NaN) // -> false
```


### [isOdd](https://yaohaixiao.github.io/types.js/#method-isOdd)

isOdd(val) 方法用来检测测试数据的数据类型是否为奇数。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是奇数返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isOdd() 方法
// import isOdd from '@yaohaixiao/types.js/esm/isOdd'

Types.isOdd(3) // -> true
Types.isOdd(3.0) // -> true
Types.isOdd(2) // -> false
Types.isOdd(3.1) // -> false
```


### [isPlainObject](https://yaohaixiao.github.io/types.js/#method-isPlainObject)

isPlainObject(val) 方法用来检测测试数据是否为普通对象。

#### Parameters

##### val

Type: `Object`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是普通对象返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isPlainObject() 方法
// import isPlainObject from '@yaohaixiao/types.js/esm/isPlainObject'

let udf

// 基础类型
Types.isPlainObject(2) // -> false
Types.isPlainObject('str') // -> false
Types.isPlainObject(false) // -> false
Types.isPlainObject(null) // -> false
Types.isPlainObject(udf) // -> false

// 引用类型
Types.isPlainObject(new Function()) // -> false
Types.isPlainObject(function(){}) // -> false
Types.isPlainObject(() => {}) // -> false
Types.isPlainObject(class{}) // -> false

Types.isPlainObject(new class{}) // -> true
Types.isPlainObject({}) // -> true
Types.isPlainObject(Object.create(null)) // -> true
Types.isPlainObject(new Object()) // -> true
Types.isPlainObject([]) // -> true
Types.isPlainObject(/s+/ig) // -> true
Types.isPlainObject(new String()) // -> true
Types.isPlainObject(new Number()) // -> true
Types.isPlainObject(new Boolean()) // -> true
Types.isPlainObject(new Array()) // -> true
Types.isPlainObject(new Date()) // -> true
```


### [isRegExp](https://yaohaixiao.github.io/types.js/#method-isRegExp)

isRegExp(val) 方法用来检测测试数据是否为正则表达式。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是正则表达式返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isRegExp() 方法
// import isRegExp from '@yaohaixiao/types.js/esm/isRegExp'

Types.isRegExp(new RegExp('\s+','ig')) // -> true
Types.isRegExp(/\s+/ig) // -> true
```


### [isSet](https://yaohaixiao.github.io/types.js/#method-isSet)

isSet(val) 方法用来检测测试数据是否为 isSet 类型。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 isSet 类型返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isSet() 方法
// import isSet from '@yaohaixiao/types.js/esm/isSet'

const mySet = new Set([1,2,3,4])

Types.is(mySet) // -> 'set'

Types.isSet(mySet) // -> true
Types.isSet([1,2,3,4]) // -> false
```


### [isSymbol](https://yaohaixiao.github.io/types.js/#method-isSymbol)

isSymbol(val) 方法用来检测测试数据是否为 Symbol 类型。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Symbol 类型返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isSymbol() 方法
// import isSymbol from '@yaohaixiao/types.js/esm/isSymbol'

const sym = Symbol('foo')
const symObj = Object(sym)

Types.is(sym) // -> 'symbol'
Types.isSymbol(sym) // -> true

Types.is(symObj) // -> 'object'
Types.isSymbol(symObj) // -> false
```


### [isTextNode](https://yaohaixiao.github.io/types.js/#method-isTextNode)

isTextNode(val) 方法用来检测测试数据是否为文本节点。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是文本节点返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isTextNode() 方法
// import isTextNode from '@yaohaixiao/types.js/esm/isTextNode'

Types.isTextNode(document.createElement('p')) // -> false
Types.isTextNode(document.createTextNode('p')) // -> true
```


### [isValue](https://yaohaixiao.github.io/types.js/#method-isValue)

isValue(val) 方法用来检测测试数据是否为有效的数据。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是有效的数据返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isValue() 方法
// import isValue from '@yaohaixiao/types.js/esm/isValue'

let projects

Types.isValue(projects) // -> false
Types.isValue(function empty(){}) // -> true
Types.isValue(/\s+/ig) // -> true
Types.isValue([]) // -> true
Types.isValue('') // -> true
Types.isValue(0) // -> true
Types.isValue(NaN) // -> false
Types.isValue( null ) // -> false
Types.isValue({}) // -> true
```


### [isWeakMap](https://yaohaixiao.github.io/types.js/#method-isWeakMap)

isWeakMap(val) 方法用来检测测试数据是否为 WeakMap 类型。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 WeakMap 类型返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isWeakMap() 方法
// import isWeakMap from '@yaohaixiao/types.js/esm/isWeakMap'

const map = new Map([
    ['name', 'Robert'],
    ['Gender', 'Male']
])

const weakmap = new WeakMap({},'Robert')

Types.is(weakmap) // -> 'weakmap'

Types.isWeakMap(weakmap) // -> true
Types.isWeakMap(map) // -> false
```


### [isWeakSet](https://yaohaixiao.github.io/types.js/#method-isWeakSet)

isWeakSet(val) 方法用来检测测试数据是否为 WeakSet 类型。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 WeakSet 类型返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isWeakSet() 方法
// import isWeakSet from '@yaohaixiao/types.js/esm/isWeakSet'

const weakset = new WeakSet([
    {'name': 'Robert'},
    window
])

const set = new Set([1,2,3])

Types.is(weakset) // -> 'weakset'

Types.isWeakSet(weakset) // -> true
Types.isWeakSet(set) // -> false
```


### [isXML](https://yaohaixiao.github.io/types.js/#method-isXML)

isXML(obj) 方法返回检测数据的是否为 XML 格式数据。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 为 XML 返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/esm/types'
// 或者单独引用 isXML() 方法
// import isXML from '@yaohaixiao/types.js/esm/isXML'

const jsdom = require("jsdom")
const { JSDOM } = jsdom
const DOMParser = require('xmldom').DOMParser
const HTML = new JSDOM('<html><head><title>isXML</title></head><body><p>p1</p><p>p2</p><p>p3</p></body></html>')
const XML = new DOMParser().parseFromString(
    '<xml xmlns="a" xmlns:c="./lite">\n'+
        '\t<child>test</child>\n'+
        '\t<child></child>\n'+
        '\t<child/>\n'+
    '</xml>','text/xml')

Types.isXML(XML) // -> true
Types.isXML(HTML) // -> false
```


## License

[MIT License](http://opensource.org/licenses/mit-license.html)
