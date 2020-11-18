/**
 * 对于泛型Generics的理解
 * 我们在定义函数, 接口, 类的时候,我们不预选对它们的类型进行指定.而是我们在使用的时候给定它们的具体类型
 * */
// 1.首先看一个简单的例子
function Fn(arg) {
    return arg;
}
var res = Fn(123);
// const res: string = Fn(123)
/*
* 我们在简单调用函数Fn的时候, 参数是any类型 函数的返回值是any类型
* 但是我们在获取到函数的返回值的时候实际是一个数字, 并且我们就算给数字添加上为string类型也不会出现报错
* 这就导致了我们的数据类型丢失,很不严谨,可能会出现BUG
* 为了解决这个问题 我们就使用了泛型这个东西, 请看上面对泛型的理解
* */
// 函数泛型的写法
function GenericsFn(arg) {
    return arg;
}
var res1 = GenericsFn('llllll'); // string
function jiaoHuanWeiZhi(tuple) {
    return [tuple[1], tuple[0]];
}
var res2 = jiaoHuanWeiZhi(['hello', 9527]);
console.log(res2);
