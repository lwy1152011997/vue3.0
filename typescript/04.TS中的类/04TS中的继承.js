var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// TS 中的继承和ES6的类似 需要使用到extends super 这两个关键字
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.say = function () {
        return "\u6211\u662F" + this.name;
    };
    return Person;
}());
var tony = new Person('tony');
// 继承
var Boy = /** @class */ (function (_super) {
    __extends(Boy, _super);
    // 如果Boy类在继承Person的时候,想要继承父类的方法或者属性,必须要在constructor函数中调用super方法,并传参
    function Boy(name, age) {
        var _this = 
        // super的作用可以理解为再次调用父类的constructor方法,并传参,这样子类可以继承父类分属性和方法
        _super.call(this, name) || this;
        _this.name = name;
        _this.age = age;
        return _this;
    }
    // 子类自己的方法
    Boy.prototype.work = function () {
        console.log('我爱工作');
    };
    return Boy;
}(Person));
var boy = new Boy('tonyLiu', 27);
console.log(boy);
console.log(boy.say());
console.log(boy.work());
