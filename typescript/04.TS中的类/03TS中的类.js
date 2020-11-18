// TS 中定义类
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // 定义类的方法
    Person.prototype.say = function () {
        console.log('hello TS');
    };
    return Person;
}());
var person = new Person('tony', 27);
console.log(person.say());
var Person1 = /** @class */ (function () {
    function Person1(name, age) {
        this.name = name;
        this.age = age;
    }
    Person1.prototype.getName = function () {
        return this.name;
    };
    Person1.prototype.setName = function (name, age) {
        this.name = name;
        this.age = age;
    };
    return Person1;
}());
var person1 = new Person1('weiyun', 22);
console.log(person1);
console.log(person1.getName());
console.log(person1.setName('liu', 27));
console.log(person1);
