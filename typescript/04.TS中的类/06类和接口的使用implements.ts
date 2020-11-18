/**
 *使用接口来对类的行为进行抽象描述
 * 例如下面的两个类Car,Phone 都有swithchRadio相同的功能
 * */
// class Car {
//   swithchRadio(open: boolean) {
//
//   }
// }
//
// class Phone {
//   swithchRadio(open: boolean) {
//
//   }
// }

// 我们把功能的方法抽取为一个接口
interface openRadio {
  swithchRadio(open: boolean): void
  product: string
}
interface Sing {
  sing(): void
}

// 这时候如果Car,Phone这两个类要用到interface中的方法,我们需要使用到implements修饰符
// 这样就需要Car,Phone这两个类来实现这个方法, 如果某个类没有实现这个方法就会报错
// implements 这个关键字的意思就是告诉类已经和某个接口签订了协议.你必须要去实现某个方法.或者定义某个属性
class Car implements openRadio{
  swithchRadio(open: boolean) {

  }
  product: 'lol'
}

// 如果某个类需要签订多个接口,直接在后面添即可
class Phone implements openRadio, Sing{
  swithchRadio(open: boolean) {

  }
  product: 'haha'
  sing(): void {
    console.log('i am sing')
  }
}