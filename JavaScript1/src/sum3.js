const { create, all } = require('mathjs');
const config = {
  number: 'BigNumber', // 可选值：number BigNumber bignumber() 方法是进行数值类型声明，即表示该数值类型是浮点数，需要进行精度计算
};
const math = create(all, config);
//format()方法是格式化校验方法，把math方法计算出的值以字符串的形式显示最终的结果
console.log('math.js方法计算浮点数加');

console.log(math.format(math.evaluate('1.0000000000000000000000001+2.2')));
