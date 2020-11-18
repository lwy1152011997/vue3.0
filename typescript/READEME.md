# 简介:
  typescript 是javascript的超集,
  是JavaScript的语法扩展,为了更规范的开发它增加了变量的数据类型校验,
  我们在定义变量的时候必须指定类型
  可以让js开发大中型的项目,
  浏览器并不能直接支持TS语法,需要先进行编译;
  
## 安装以及编译
  npm i -g typescript
  tsc -V 可以查看typescript的版本
  tsc 以.ts后缀结尾的文件名 对ts文件进行编译,编译后为js文件
  如果需要工具自动对ts文件进行编译,请百度教程
     
## TS中为我们提供了一下的数据类型
  布尔值,boolean
  数字,number
  字符串,string
  数组,array
  元组,tuple
  枚举,enum
  任意类型,any
  null,undefined
  void类型
  never类型
  
## TS的优点:
  1. 更容易理解,比如函数定义的返回值, 变量的意思
  2. 长期的中大型项目使用起来后期维护很方便
  3. ts中的:号后面都是在对类型的声明,实际代码逻辑没有什么关系
  
## ts中的奇怪符号:
  
