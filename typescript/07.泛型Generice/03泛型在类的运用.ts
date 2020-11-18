/**
 * 泛型在类中的使用
 * */
class Queue { // 创建一个名为Queue的类
  private data= []
  // 队列是一个先进先出的排队列表 数据结构
  push(item) {
    return this.data.push(item)
  }
  pop() {
    return this.data.shift()
  }
}

interface Key<T, U> {
  key: T
  value: U
}

const my: Key<string, number> = {
  key: 'lwy',
  value: 9527
}
console.log(my)