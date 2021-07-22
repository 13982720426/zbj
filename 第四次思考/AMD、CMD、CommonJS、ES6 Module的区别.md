# AMD、CMD、UMD、CommonJS、ES6 Module的区别
### javascript 模块化的发展历程
JS 模块化开发有较长的历史，早起流行的命名空间 的开发思想，到后来有了一些模块化的开发规范，最先是CommonJS（主要使用在NodeJS 不是和浏览器），后来AMD、CMD、UMD、ESM等规范相继诞生。因为JS并未提供一种原生的，语言级别的模块化开发模式，而是将模块化交给开发者实现，所以这些规范的诞生，让JS模块化开发变得规范。
### AMD
全称 Asynchronous module definition（异步模块定义）
AMD一开始是CommonJS规范中的一个草案，全称是Asynchronous Module Definition，即异步模块加载机制。后来由该草案的作者以RequireJS实现了AMD规范，所以一般说AMD也是指RequireJS。

- 使用 define(...) 定义一个模块；
- 使用require(...) 加载一个模块；
- 依赖前置，提前执行；
#### RequireJS的基本用法
通过define来定义一个模块，使用require可以导入定义的模块。
```javascript
//a.js
//define可以传入三个参数，分别是字符串-模块名、数组-依赖模块、函数-回调函数
define(function(){
    return 1;
})

// b.js
//数组中声明需要加载的模块，可以是模块名、js文件路径
require(['a'], function(a){
    console.log(a);// 1
});

```
#### RequireJS的特点
对于依赖的模块，AMD推崇**依赖前置，提前执行**。也就是说，在define方法里传入的依赖模块(数组)，会在一开始就下载并执行。
### CMD
全称 Common Module Definition（通用模块定义）
CMD是SeaJS在推广过程中生产的对模块定义的规范，在Web浏览器端的模块加载器中，SeaJS与RequireJS并称，SeaJS作者为阿里的玉伯。

- 一个文件为一个模块
- 使用 define(...) 定义一个模块 （和AMD相似）
- 使用require(...) 加载一个模块（和AMD 相似）

SeaJS 是CMD 的一种实现
#### SeaJS的基本用法
```javascript
//a.js
/*
* define 接受 factory 参数，factory 可以是一个函数，也可以是一个对象或字符串，
* factory 为对象、字符串时，表示模块的接口就是该对象、字符串。
* define 也可以接受两个以上参数。字符串 id 表示模块标识，数组 deps 是模块依赖.
*/
define(function(require, exports, module) {
  var $ = require('jquery');

  exports.setColor = function() {
    $('body').css('color','#333');
  };
});

//b.js
//数组中声明需要加载的模块，可以是模块名、js文件路径
seajs.use(['a'], function(a) {
  $('#el').click(a.setColor);
});

```
#### SeaJS的特点
对于依赖的模块，CMD推崇**依赖就近，延迟执行**。也就是说，只有到require时依赖模块才执行。
​

CMD和AMD 的最显著的区别 AMD 是提前执行，CMD 是延迟执行，依赖就近；
AMD： 执行过程中会将所有的依赖模块前置执行，也就是自己的代码逻辑开始前全部执行；
CMD ：如果require 但整个逻辑未使用这个依赖 或者为执行到逻辑使用它的地方前，不会执行。
### UMD
UMD叫做通用模块定义规范（Universal Module Definition）。也是随着大前端的趋势所诞生，它可以通过运行时或者编译时让同一个代码模块在使用 CommonJs、CMD 甚至是 AMD 的项目中运行。
它没有自己专有的规范，是集结了 CommonJs、CMD、AMD 的规范于一身，这个万能模块，可以在服务端使用，也可以在浏览器端使用；
它主要做了三件事：

- 判断是否支持AMD
- 判断是否支持CommonJS
- 如果都不支持，使用全局变量

主要代码如下：
```javascript
(function (root, factory) {
    // 对应上述的三个步骤
    if (typeof define === 'function' && define.amd) {
        // 1.判断是否支持 AMD
        // 如果 define 这个方法是被定义 并且 define 这个方法是 AMD 的规范，那就把 factory 这个模块实体用 define 方法以 AMD 的规范 定义
        define([], factory); // [] 是依赖，factory 是模块实体
    } else if (typeof exports === 'object') {
        // 2. 判断是否支持 CommonJS
        // 如果 exports 是等于一个对象，则表明是在 Node 环境中运行，则支持 CommonJS，那就用 module.exports 暴露整个模块实体
        module.exports = factory();
    } else {
        // 3. 如果都不支持，使用全局变量
        // Browser globals (root 即是 window)
        root.returnExports = factory();
  }
}(this, function () {
    // Module Defination
    var sum = function(x, y){
        return x + y;
    }
    var sub = function(x, y){
        return x - y;
    }
    var math = {
        findSum: function(a, b){
            return sum(a,b);
        },
        findSub: function(a, b){
            return sub(a, b);
        }
    }
    return math;
}));

```
### CommonJS
CommonJS规范为CommonJS小组所提出，目的是弥补JavaScript在服务器端缺少模块化机制，NodeJS、webpack都是基于该规范来实现的。

- 一个文件一个模块；
- 使用 exports.xx = ... 或者 module.exports ={} 暴露模块；
- 使用 require() 方法引入一个模块；
- require()是同步执行的；
#### CommonJS的基本用法
```javascript
//a.js
module.exports = function () {
  console.log("hello world")
}

//b.js
var a = require('./a');

a();//"hello world"

//或者

//a2.js
exports.num = 1;
exports.obj = {xx: 2};

//b2.js
var a2 = require('./a2');

console.log(a2);//{ num: 1, obj: { xx: 2 } }

```
CommonJS 在NodeJS 环境用，不适用于浏览器；
一个文件一个模块；如果有多个导出，则取最后一个导出；
#### CommonJS的特点

- 所有代码都运行在模块作用域，不会污染全局作用域；
- 模块是同步加载的，即只有加载完成，才能执行后面的操作；
- 模块在首次执行后就会缓存，再次加载只返回缓存结果，如果想要再次执行，可清除缓存；
- CommonJS输出是值的拷贝(即，require返回的值是被输出的值的拷贝，模块内部的变化也不会影响这个值)。
### ES6 Module
全称 ECMAScript Module
ES6 Module是ES6中规定的模块体系，相比上面提到的规范， ES6 Module有更多的优势，有望成为浏览器和服务器通用的模块解决方案。

- 使用 import 导入模块；
- 使用 export 导出模块；
#### ES6 Module的基本用法
```javascript
//a.js
var name = 'lin';
var age = 13;
var job = 'ninja';

export { name, age, job};

//b.js
import { name, age, job} from './a.js';

console.log(name, age, job);// lin 13 ninja

//或者

//a2.js
export default function () {
  console.log('default ');
}

//b2.js
import customName from './a2.js';
customName(); // 'default'

```
#### ES6 Module的特点(对比CommonJS)

- CommonJS模块是运行时加载，ES6 Module是编译时输出接口；
- CommonJS加载的是整个模块，将所有的接口全部加载进来，ES6 Module可以单独加载其中的某个接口；
- CommonJS输出是值的拷贝，ES6 Module输出的是值的引用，被输出模块的内部的改变会影响引用的改变；
- CommonJS this指向当前模块，ES6 Module this指向undefined;

目前浏览器对ES6 Module兼容还不太好，我们平时在webpack中使用的export/import，会被打包为exports/require。

​

