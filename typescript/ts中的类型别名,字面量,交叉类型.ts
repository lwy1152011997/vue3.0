// 定义一个函数类型
let sub: (x: number, y:number) => number
let res = sub(1, 2)
// 类型别名. 给类型取一个别名 使用 type 关键字
type SUB = (x: number, y:number) => number
let res1: SUB

type STRORNUM = string | number
let strornum: STRORNUM

// 字面量, 常量
const str: 'name' = 'name' // 类型为'name' 那么值只能是'name'
type Dirctions = 'up' | 'down' | 'left' | 'right' // 定义方向

// 交叉类型
interface A {
  a: string
}
type AB = A & {b: boolean} // 将两个类型连接起来 AB就变为拥有 a,b两个属性的数据类型
let ab: AB = {
  a: 'lwy',
  b: false
}