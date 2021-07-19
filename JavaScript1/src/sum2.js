//Big.js方法计算浮点数加
//只适用于十进制数，并且不允许NaN或Infinity。
const Big = require('big.js');

let result = parseFloat(new Big(0.1).plus(0.2));
console.log('Big.js方法计算浮点数加');
console.log('使用Big.js方法 0.1 + 0.2 的结果是 ' + `${result}`);
