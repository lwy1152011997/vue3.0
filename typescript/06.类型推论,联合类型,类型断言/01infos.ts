/**
 * 类型推论
 * ts 会自动根据我们赋值的类型进行数据类型的限制, 我们再次赋值非同类数据类型的时候会提示错误
 * */
const str = 'string'
str = 123


/**
 * 联合类型, 一个变量的数据可以是多种数据类型,
 * 联合类型的变量只能访问它们数据类型的属性或者方法
 * */
let numOrString: number|string = '编号9527'
numOrString = 9527

/**
 * 类型断言 意思是你比代码更了解某个变量是什么类型,
 * 可以指定某个变量是什么类型
 * */
function getLength(val: number|string): number {
  const str = val as string // 断言val就是一个字符串类型
  return str.length
}

// type guard 对于使用联合类型的变量 缩小变量的数据类型范围
function getLength2(val: number|string|boolean): number {
  if (typeof val === 'string') {
    return val.length
  }
}