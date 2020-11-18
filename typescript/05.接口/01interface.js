// TS中接口定义完成后, 对接口定义的变量进行赋值的时候,必须要和接口定义的类长得一样,既不能多属性也不能少属性
var lwy = {
    id: 9527,
    name: 'liuwenying',
    age: 27
};
/**
 * 直接写函数类型, 函数也是一种类型
 * */
var add = function (x, y) {
    return x + y;
};
var add2 = add;
console.log(add2(1, 2));
