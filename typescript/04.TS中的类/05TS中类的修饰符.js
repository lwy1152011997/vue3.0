/**
 * 在TS中 类里面提供了3中修饰符
 * public    公有的 表示使用这个修饰符定义的属性 无论在哪里都可以被访问到(无论在类里, 类外, 以及它的子类)
 * protected 受保护类型 只能在它本身类里和子类访问到, 类的外部不能访问
 * private   私有的 在类的里面可以访问, 子类以及类的外面都不能访问
 *
 * 类的属性如果不加修饰符, 默认采用public
 * */
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
/**
 * TS中的静态方法, 静态属性
 * 静态方法: 类本身的直接方法,不会被继承
 * 静态属性: 类本身的直接属性,不会被继承
 *
 * */
var Person1 = /** @class */ (function () {
    function Person1() {
    }
    Person1.getSex = function () {
        return Person1.sex;
    };
    // 类的静态方法 使用static 关键字, 静态方法只能访问到静态属性
    Person1.sex = 'boy';
    return Person1;
}());
var p = new Person1();
console.log(p);
