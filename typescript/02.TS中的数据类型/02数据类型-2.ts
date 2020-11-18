/**
 * any 任意类型, 和es5中的变量类型由它的值决定类似, 常用在对DOM节点的获取上
 * */
let myAny: any = 'hello';
// 可以对any类型的变量进行任意的赋值
myAny = 10086;
myAny = true;

const domNode: any = document.getElementById('app'); // 给dom节点的类型规定为any在编译的时候就不会报错了
domNode.style.color = 'yello';


/**
 * null 和 undefined 它们是所有数据类型中(never)的子类型
 * */
let num: undefined; // 打印为undefined,表示没有赋值
let num1: number | undefined; // 定义但没有赋值就是undefined

let null1: null;
let muchType: number | undefined | null; // 一个元素可以设置多个数据类型


/**
 * void 类型 表示的意思是某个变量没有任何类型, 一般用来定义方法的时候使用,如果这个方法没有返回值就会用到这个类型
 * */

function noreturnVal(): void {
  // 这样就表示这个方法是没有返回值的, 没有返回任何类型的值
  console.log('此方法没有返回值')
}

// 方法有返回值时
function returnNum():number { // 表示此方法的返回值会是一个数字类型
  return 10086
}

function returnStr():string { // 表示此方法的返回值会是一个字符串类型
  return 'hello hello'
}


/**
 * never 类型,也称为其他类型(它包括null 和 undefined这两个子类型), 它代表从不会出现的值
 * 声明never类型的变量只能被never类型的值赋值,
 * 但是这样的类型一般不用, 如果用的话可以用在抛出异常时候使用
 * */

let und: undefined;
und = undefined;

let _null: null;
_null = null;

let _err: never;
_err = (() => {
  throw new Error('出错啦')
})();