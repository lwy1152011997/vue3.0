/**
 * 在TS中 类里面提供了3中修饰符
 * public    公有的 表示使用这个修饰符定义的属性 无论在哪里都可以被访问到(无论在类里, 类外, 以及它的子类)
 * protected 受保护类型 只能在它本身类里和子类访问到, 类的外部不能访问
 * private   私有的 在类的里面可以访问, 子类以及类的外面都不能访问
 *
 * 类的属性如果不加修饰符, 默认采用public
 * */
class Person {
  private name: string;
}

/**
 * TS中的静态方法, 静态属性
 * 静态方法: 类本身的直接方法,不会被继承
 * 静态属性: 类本身的直接属性,不会被继承
 *
 * */
class Person1 {
  // 类的静态方法 使用static 关键字, 静态方法只能访问到静态属性
  static sex: string = 'boy'
  static getSex(): string {
    return Person1.sex
  }
}
const p = new Person1();
console.log(p);

/**
 * TS中的多态, 父类定义方法但是不去实现功能,让子类去自行实现,而且每一个子类可以有不同的表现
 * */