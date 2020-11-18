// TS 中的继承和ES6的类似 需要使用到extends super 这两个关键字
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  say(): string {
    return `我是${this.name}`
  }
}

const tony = new Person('tony');

// 继承
class Boy extends Person{
  // 子类自己的属性
  name: string;
  age: number;

  // 如果Boy类在继承Person的时候,想要继承父类的方法或者属性,必须要在constructor函数中调用super方法,并传参
  constructor(name: string, age: number) {
    // super的作用可以理解为再次调用父类的constructor方法,并传参,这样子类可以继承父类分属性和方法
    super(name);
    this.name = name;
    this.age = age;
  }

  // 子类自己的方法
  work() {
    console.log('我爱工作');
  }
}

const boy = new Boy('tonyLiu', 27);
console.log(boy);
console.log(boy.say());
console.log(boy.work());