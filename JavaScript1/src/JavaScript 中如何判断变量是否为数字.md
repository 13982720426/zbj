# JavaScript 中如何判断变量是否为数字

字符串形式的数字例如 "100" 不应该被处理，同时在 JavaScript 中 NaN，Infinity 和 -Infinity 之类的特殊值也都是数字，不过我们将忽略这些值。

根据这些要求，最好使用的函数是内置 Number 对象中的 isFinite 函数。但是，开发人员通常会使用其他函数，如 Number.isNaN 和 typeof 函数。
​

该全局 **isFinite()** 函数用来判断被传入的参数值是否为一个有限数值（finite number）。在必要情况下，参数会首先转为一个数值。
**语法** isFinite(_testValue_)
**参数** **testValue**
用于检测有限性（finiteness）的值。
**描述**
isFinite 是全局的方法，不与任何对象有关系。
你可以用这个方法来判定一个数字是否是有限数字。isFinite 方法检测它参数的数值。如果参数是 NaN，正无穷大或者负无穷大，会返回 false，其他返回 true。
​

我们先创建一些变量：

```javascript
let intVar = 2
let floatVar = 10.5
let stringVar = '4'
let nanVar = NaN
let infinityVar = Infinity
let nullVar = null
let undefinedVar = undefined
```

## Number.isFinite 方法

Number.isFinite 函数检查变量是否为数字，还检查其是否为 有限值。因此，对于 NaN ， Infinity 或 -Infinity 的数字，它返回 false 。

我们用上面定义的变量来检验一下:

```javascript
console.log('Number.isFinite方法判断是否为number')
console.log('Number.isFinite方法 ' + `${intVar} ` + Number.isFinite(intVar))
console.log('Number.isFinite方法 ' + `${floatVar} ` + Number.isFinite(floatVar))
console.log('Number.isFinite方法 ' + `${stringVar} ` + Number.isFinite(stringVar))
console.log('Number.isFinite方法 ' + `${nanVar} ` + Number.isFinite(nanVar))
console.log('Number.isFinite方法 ' + `${infinityVar} ` + Number.isFinite(infinityVar))
console.log('Number.isFinite方法 ' + `${nullVar} ` + Number.isFinite(nullVar))
console.log('Number.isFinite方法 ' + `${undefinedVar} ` + Number.isFinite(undefinedVar))
console.log('Number.isFinite方法 ' + `${intVar} ` + Number.isFinite(intVar))
```

结果：

```javascript
Number.isFinite方法判断是否为number
Number.isFinite方法 2 true
Number.isFinite方法 10.5 true
Number.isFinite方法 4 false
Number.isFinite方法 NaN false
Number.isFinite方法 Infinity false
Number.isFinite方法 null false
Number.isFinite方法 undefined false
Number.isFinite方法 2 true
```

这正是我们想要的。特殊的非有限数以及非数字类型的任何变量都会被忽略。所以，如果你想检查一个变量是否是一个数字，最好的方法是使用 Number.isFinite 函数。

## Number.isNaN 方法

标准 Number 对象有一个 isNaN 方法。它接受一个参数，并确定其值是否为 NaN 。因为我们想检查一个变量是否是一个数字，所以我们将在检查中使用非操作符 ! 。

```javascript
console.log('Number.isNaN方法判断是否为number')
console.log('Number.isNaN方法 ' + `${intVar} ` + !Number.isNaN(intVar))
console.log('Number.isNaN方法 ' + `${floatVar} ` + !Number.isNaN(floatVar))
console.log('Number.isNaN方法 ' + `${stringVar} ` + !Number.isNaN(stringVar))
console.log('Number.isNaN方法 ' + `${nanVar} ` + !Number.isNaN(nanVar))
console.log('Number.isNaN方法 ' + `${infinityVar} ` + !Number.isNaN(infinityVar))
console.log('Number.isNaN方法 ' + `${nullVar} ` + !Number.isNaN(nullVar))
console.log('Number.isNaN方法 ' + `${undefinedVar} ` + !Number.isNaN(undefinedVar))
console.log('Number.isNaN方法 ' + `${intVar} ` + !Number.isNaN(intVar))
```

结果：

```javascript
Number.isNaN方法判断是否为number
Number.isNaN方法 2 true
Number.isNaN方法 10.5 true
Number.isNaN方法 4 true
Number.isNaN方法 NaN false
Number.isNaN方法 Infinity true
Number.isNaN方法 null true
Number.isNaN方法 undefined true
Number.isNaN方法 2 true
```

这个方法是相当宽松的，因为它接受根本不是数字的值。这种方法最适合于当你知道你有一个数字并且要检查它是否是一个 NaN 值时，而不是一般的数字检查。

## Object.prototype.toString

使用 Object.prototype.toString 方法, 可以获取到变量的准确的类型.

```javascript
console.log(
  'Object.prototype.toString.call()方法 ' + `${intVar} ` + Object.prototype.toString.call(intVar)
)
console.log(
  'Object.prototype.toString.call()方法 ' +
    `${floatVar} ` +
    Object.prototype.toString.call(floatVar)
)
console.log(
  'Object.prototype.toString.call()方法 ' +
    `${stringVar} ` +
    Object.prototype.toString.call(stringVar)
)
console.log(
  'Object.prototype.toString.call()方法 ' + `${nanVar} ` + Object.prototype.toString.call(nanVar)
)
console.log(
  'Object.prototype.toString.call()方法 ' +
    `${infinityVar} ` +
    Object.prototype.toString.call(infinityVar)
)
console.log(
  'Object.prototype.toString.call()方法 ' + `${nullVar} ` + Object.prototype.toString.call(nullVar)
)
console.log(
  'Object.prototype.toString.call()方法 ' +
    `${undefinedVar} ` +
    Object.prototype.toString.call(undefinedVar)
)
console.log(
  'Object.prototype.toString.call()方法 ' + `${intVar} ` + Object.prototype.toString.call(intVar)
)
```

结果：

```javascript
Object.prototype.toString.call方法判断是否为number
Object.prototype.toString.call()方法 2 [object Number]
Object.prototype.toString.call()方法 10.5 [object Number]
Object.prototype.toString.call()方法 4 [object String]
Object.prototype.toString.call()方法 NaN [object Number]
Object.prototype.toString.call()方法 Infinity [object Number]
Object.prototype.toString.call()方法 null [object Null]
Object.prototype.toString.call()方法 undefined [object Undefined]
Object.prototype.toString.call()方法 2 [object Number]
```

Object.prototype.toString 的原理是当调用的时候, 就取值内部的 [[Class]] 属性值, 然后拼接成 '[object ' + [[Class]] + ']' 这样的字符串并返回. 然后我们使用 call 方法来获取任何值的数据类型.
​

## typeof 方法

typeof()函数是一个全局函数，它接受变量或值作为参数，并返回其类型的字符串表示。JavaScript 总共有 9 种类型

- undefined
- boolean
- number
- string
- bigint
- symbol
- object
- null (typeof() 显示的是 object)
- function (一种特殊类型的 object)

typeof 命令可以判断所有 javascript 中的基本数据类型(Null, Undefined, Boolean, String, Number), 虽然 null 使用 typeof 返回的是 object 字符串, 但是无碍
它的基本使用, 但是在一些复杂的场景比如 object 与 null, array 与 object, function 与 object 等等的类型区分, typeof 就会显得心有余力不足了.
​

为了验证变量是否为数字，我们只需要检查 typeof 返回的值是否为`"number"。让我们尝试一下测试变量：

```javascript
console.log('typeof方法判断是否为number')
console.log('Number.isNaN方法 ' + `${intVar} ` + `${typeof intVar == 'number'}`)
console.log('Number.isNaN方法 ' + `${floatVar} ` + `${typeof floatVar == 'number'}`)
console.log('Number.isNaN方法 ' + `${stringVar} ` + `${typeof stringVar == 'number'}`)
console.log('Number.isNaN方法 ' + `${nanVar} ` + `${typeof nanVar == 'number'}`)
console.log('Number.isNaN方法 ' + `${infinityVar} ` + `${typeof infinityVar == 'number'}`)
console.log('Number.isNaN方法 ' + `${nullVar} ` + `${typeof nullVar == 'number'}`)
console.log('Number.isNaN方法 ' + `${undefinedVar} ` + `${typeof undefinedVar == 'number'}`)
console.log('Number.isNaN方法 ' + `${intVar} ` + `${typeof intVar == 'number'}`)
```

结果：

```javascript
typeof方法判断是否为number
Number.typeof方法 2 true
Number.typeof方法 10.5 true
Number.typeof方法 4 false
Number.typeof方法 NaN true
Number.typeof方法 Infinity true
Number.typeof方法 null false
Number.typeof方法 undefined false
Number.typeof方法 2 true
```

typeof 函数的性能比 Number.isNaN 要好得多。它正确地确定了字符串变量 null 和 undefined 不是数字。但是，对于 NaN 和 Infinity ，它返回 true 。

尽管从技术上来说这是正确的结果，但 NaN 和 Infinity 是特殊的数字值，对于大多数使用情况，我们宁愿忽略它们。

## 总结

- 只有在我们知道自己的变量是一个数字，并且需要验证它是否为 NaN 时，Number.isNaN() 函数才适用。
- 如果你的代码需要处理 NaN，Infinity 或 -Infinity 及其他数字时，则 typeof() 函数是适用的。
- Number.isFinite() 方法能够处理特殊数字，并且最适合我们的要求。
