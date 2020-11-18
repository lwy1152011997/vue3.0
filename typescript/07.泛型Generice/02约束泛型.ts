/**
 * 约束泛型
 * */
function a<T>(arg: T): T {
  console.log(arg.length) // 这个时候会报错, arg里面可能不包含length这个属性
  return arg
}

// 解决方式1 让arg为拥有length的属性
function b<T>(arg: T[]): T[] {
  console.log(arg.length) // 这个时候会报错, arg的类型为数组, 含有length属性所以不会报错, 但是只能是数组,不能满足string obj 因为他们也有length属性
  return arg
}

// 解决方式2 使用interface 约束泛型
interface length {
  length: number
}

function c<T extends length>(arg: T): T {
  console.log(arg.length) // 这个时候 只要传递的实参含有length属性就能符合arg的规定
  return arg
}

const res = c('lwy')
const res2 = c([9, 5, 2, 7])
const res3 = c({
  length: 2
})