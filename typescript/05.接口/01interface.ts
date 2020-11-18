// interface 接口 它是用来对对象进行描述的, 大白话就是定义对象长什么样子
// JS中不存在接口,所以在编译之后,不会被转换编译到js文件中
interface Person {
  readonly id: number // 表示id属性只能做读取使用
  name: string
  age: number
  sex?: string // 表示这个sex属性为可选属性, 在给变量赋值的时候可以选择赋值,可也以选择不赋值
}

// TS中接口定义完成后, 对接口定义的变量进行赋值的时候,必须要和接口定义的类长得一样,既不能多属性也不能少属性
const lwy: Person = {
  id: 9527,
  name: 'liuwenying',
  age: 27
}


/**
 * interface声明函数类型
 * 函数的参数为x,y,z 返回值为number
 * */
interface SumFn {
  (x: number, y: number, z?: number): number
}

/**
 * 直接写函数类型, 函数也是一种类型
 * */
const add = (x: number, y: number): number => {
  return x + y
}

const add2: (x: number, y:number) => number = add
console.log(add2(1, 2))

