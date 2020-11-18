// https://blog.csdn.net/qq_36380426/article/details/108633463
// ! 非空断言操作符, 它是后缀表达式操作符 用于断言操作的对象是非 null 和非 undefined 类型
// x! 表示将 x 的值域中排除掉 null 和 undefined 这两个数据类型

function myFunc(maybeString: string | undefined | null) { // 参数的类型可能是字符串,underfined,null
  const ignoreUndefinedAndNull: string = maybeString!; // 断言maybeString参数不会是null和underfined
}  


type NumGenerator = () => number; // 声明NumGenerator为一个函数类型,返回值为number

function myFunc2(numGenerator: NumGenerator | undefined) { // 参数numGenerator 为函数类型或者 underfined类型
  const num = numGenerator!(); // 断言numGenerator函数在调用的同时忽略 undefined 类型
}

// ?可选属性

