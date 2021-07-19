//原生方法 parseFloat() + toFixed()
//小数点直接计算取精确小数点几位数，最后字符串再转换成浮点数

a = 5.05;
b = 5.05;

let sum = parseFloat((a + b).toFixed(5)); // 0.3 parseFloat() 函数可解析一个字符串，并返回一个浮点数。

console.log(
  '原生方法 parseFloat()+toFixed() 计算 ' + `${a}` + '+' + `${b}` + ' 结果是 ' + `${sum}`
);
