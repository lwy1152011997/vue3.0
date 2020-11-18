/* 在TS中我们定义的变量必须对它的数据类型进行限制 */

/**
 * 定义一个布尔类型的变量
 * */
let flag: boolean = true;

flag = false // 可以重新赋值为false

// flag = 'hello hello' // TS中对于已经限制了数据类型的变量, 如果再赋值为其他数据类型, 编译的时候就会报错


/**
 * 定义一个数字类型的变量
 * */
const num: number = 10086;


/**
 * 定义一个字符串类型的变量
 * */
const str: string = 'hello TS';

/**
 * 定义一个数组类型的变量, 如果数组的数据类型规定了,那么数组在赋值的时,只能是其规定的类型,不能存放其他的类型
 * */

// 第一种方式 变量:数据类型[] = value
const numArr:number[] = [1, 3, 5, 7, 9]; // 定义了一个只能存放数字的数组
const strArr:string[] = ['1', '3', '5', '7', '9']; // 定义了一个只能存放字符串的数组

// 第二种方式 变量:Array<变量的类型> = value
let arr:Array<number> = [1, 2, 3]; // 定义了一个只能存放数字的数组


/**
 * 定义一个元组类型(tuple)的数组, 元组类型的数组能对数组内的值的类型进行一一对应的规定, 赋值的时候也需要一一的对应
 * */
let arrTuple:[string, number, boolean] = ['hello', 10086, false];


/**
 * 枚举类型enum (全称enumerable), 多用于定义标识符,用来标识我们会用到的状态, 固定值
 * 语法: enum 变量名 {
 *         key= val
 *         ...
 *       }
 * val的值只会是数值
 * */

enum HowAreYou { // 最近好吗?
  fine = 1,
  bad = 0
}
const say = HowAreYou.fine;
console.log(say) //1

enum Order {
  zero,
  one,
  two,
  three
}
const order:Order = Order.one
console.log(order) // 1 我们在定义枚举数据类型的时,如果我们不对立面的标识符进行赋值那么会取下标为默认值

enum Order1 {
  zero,
  one,
  two = 5,
  three
}
const order1:Order1 = Order1.three
console.log(order1) // 6 如果在某个位置对其进行了赋值,那么后面的值会以这个位置为起始作为后面的下标


/**
 * 总结:
 * 在TS中, 如果对已经限制了数据类型的变量进行重新赋值,只能赋值同类型的值,如果是其他数据类型在编译阶段就会报错
 * */