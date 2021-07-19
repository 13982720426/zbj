let intVar = 2;
let floatVar = 10.5;
let stringVar = '4';
let nanVar = NaN;
let infinityVar = Infinity;
let nullVar = null;
let undefinedVar = undefined;
console.log('#####################################################################');
console.log('Number.isFinite方法判断是否为number');
console.log('Number.isFinite方法 ' + `${intVar} ` + Number.isFinite(intVar));
console.log('Number.isFinite方法 ' + `${floatVar} ` + Number.isFinite(floatVar));
console.log('Number.isFinite方法 ' + `${stringVar} ` + Number.isFinite(stringVar));
console.log('Number.isFinite方法 ' + `${nanVar} ` + Number.isFinite(nanVar));
console.log('Number.isFinite方法 ' + `${infinityVar} ` + Number.isFinite(infinityVar));
console.log('Number.isFinite方法 ' + `${nullVar} ` + Number.isFinite(nullVar));
console.log('Number.isFinite方法 ' + `${undefinedVar} ` + Number.isFinite(undefinedVar));
console.log('Number.isFinite方法 ' + `${intVar} ` + Number.isFinite(intVar));

console.log('#####################################################################');
console.log('Number.isNaN方法判断是否为number');
console.log('Number.isNaN方法 ' + `${intVar} ` + !Number.isNaN(intVar));
console.log('Number.isNaN方法 ' + `${floatVar} ` + !Number.isNaN(floatVar));
console.log('Number.isNaN方法 ' + `${stringVar} ` + !Number.isNaN(stringVar));
console.log('Number.isNaN方法 ' + `${nanVar} ` + !Number.isNaN(nanVar));
console.log('Number.isNaN方法 ' + `${infinityVar} ` + !Number.isNaN(infinityVar));
console.log('Number.isNaN方法 ' + `${nullVar} ` + !Number.isNaN(nullVar));
console.log('Number.isNaN方法 ' + `${undefinedVar} ` + !Number.isNaN(undefinedVar));
console.log('Number.isNaN方法 ' + `${intVar} ` + !Number.isNaN(intVar));

console.log('#####################################################################');
console.log('typeof方法判断是否为number');
console.log('Number.isNaN方法 ' + `${intVar} ` + `${typeof intVar == 'number'}`);
console.log('Number.isNaN方法 ' + `${floatVar} ` + `${typeof floatVar == 'number'}`);
console.log('Number.isNaN方法 ' + `${stringVar} ` + `${typeof stringVar == 'number'}`);
console.log('Number.isNaN方法 ' + `${nanVar} ` + `${typeof nanVar == 'number'}`);
console.log('Number.isNaN方法 ' + `${infinityVar} ` + `${typeof infinityVar == 'number'}`);
console.log('Number.isNaN方法 ' + `${nullVar} ` + `${typeof nullVar == 'number'}`);
console.log('Number.isNaN方法 ' + `${undefinedVar} ` + `${typeof undefinedVar == 'number'}`);
console.log('Number.isNaN方法 ' + `${intVar} ` + `${typeof intVar == 'number'}`);

console.log('#####################################################################');
console.log('Object.prototype.toString.call方法判断是否为number');
console.log(
  'Object.prototype.toString.call()方法 ' + `${intVar} ` + Object.prototype.toString.call(intVar)
);
console.log(
  'Object.prototype.toString.call()方法 ' +
    `${floatVar} ` +
    Object.prototype.toString.call(floatVar)
);
console.log(
  'Object.prototype.toString.call()方法 ' +
    `${stringVar} ` +
    Object.prototype.toString.call(stringVar)
);
console.log(
  'Object.prototype.toString.call()方法 ' + `${nanVar} ` + Object.prototype.toString.call(nanVar)
);
console.log(
  'Object.prototype.toString.call()方法 ' +
    `${infinityVar} ` +
    Object.prototype.toString.call(infinityVar)
);
console.log(
  'Object.prototype.toString.call()方法 ' + `${nullVar} ` + Object.prototype.toString.call(nullVar)
);
console.log(
  'Object.prototype.toString.call()方法 ' +
    `${undefinedVar} ` +
    Object.prototype.toString.call(undefinedVar)
);
console.log(
  'Object.prototype.toString.call()方法 ' + `${intVar} ` + Object.prototype.toString.call(intVar)
);

console.log('#####################################################################');
