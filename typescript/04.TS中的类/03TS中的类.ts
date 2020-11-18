// TS 中定义类
class Person {
  // 定义类的属性
  name: string;
  age: number;

  // constructor函数在类被实例化的时候触发
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  // 定义类的方法
  say(): void {
    console.log('hello TS');
  }
}

const person = new Person('tony', 27);
console.log(person.say());

class Person1 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getName(): string {
    return this.name;
  }
  setName(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person1('weiyun', 22);
console.log(person1);
console.log(person1.getName());
console.log(person1.setName('liu', 27));
console.log(person1);