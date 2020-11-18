/**
 * TS中的函数写法
 * */

// 1.需要指定函数返回值的类型
function fn():string {
  // 返回值必须是对应的类型
  return 'hello'
}

const fn1 = function (): number {
  return 10086
}

// 2.函数传参, 既有函数返回值的类型, 而且也有参数的类型
function getInfo(name: string, age: number): string {
  return `我叫${name}, 今年${age}岁了`
}

const amount = function (count: number): number {
  return count++
}
amount(10086);

// 3.如果方法没有返回值
function noReturnVal(): void {
  // 处理业务...
  console.log('此方法没返回值')
}
noReturnVal();

/**
 * TS中函数的可选参数,
 * 在ES5中我们函数的形参和实参是一一对应的,如果某个形参对应的实参没有值,那么这个实参的值就是undefined,
 * 但是在TS中,如果形参声明了,实参没有传递值,这时候TS的语法编译的时候会报错,因为TS中要求既然有了形参就必须要有实参来一一对应
 * 为了做到和ES5中,某个函数的形参是可选的(也就是可以传实参也可以不传).TS中给形参的位置加了一个符号?
 * 而且我们在写可选参数的时候,一般将它写在参数的最后一个位置
 * */

// ES5中的可选参数
function getName0(name, age) {
  if (age) {
    return `我叫${name}, 今年${age}岁了`
  } else {
    return `我叫${name}, 年龄暂时不告诉你`
  }
}

// TS中的可选参数, 在需要作为可选参数的后面加 ?, 如果不加编译的时候就会编译不通过
function getName(name: string, age?: number): string {
  if (age) {
    return `我叫${name}, 今年${age}岁了`
  } else {
    return `我叫${name}, 年龄暂时不告诉你`
  }
}
getName('liuwenying');

// TS 和 ES6 中的参数默认值
function defaultVal(name: string = 'tonyLiu'): string {
  return `我叫${name}`
}
defaultVal('fuweiyun');

/**
 * TS中的剩余参数, 使用 ... 运算符, 数组接收参数
 * */
function add(a: number, b: number, c: number, d: number): number {
  return a + b + c + d
}
add(1, 2, 3, 4);

function sum(...result:number[]) {
  let _sum = 0;
  for (let i = 0; i < result.length; i++) {
    _sum += result[i]
  }
  return _sum
}
console.log(sum(1, 2, 3, 4, 5, 6));

/**
 * TS中的函数的重载, 它是可以支持函数的重载的, 但是一般不这么写
 * ES5中没有函数的重载
 * */
