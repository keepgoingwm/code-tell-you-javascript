var num1 = 1
var str1 = 'string'
var bool1 = true
var symbol1 = Symbol('xxx')
var o = {}
var o1 = Object.create(o)

function func() {

}

function ClassA() {

}
ClassA.prototype = o1
var c = new ClassA()

console.log(num1.__proto__ === Number.prototype, Object.getPrototypeOf(num1) === Number.prototype)
console.log(str1.__proto__ === String.prototype)
console.log(bool1.__proto__ === Boolean.prototype)
console.log(symbol1.__proto__ === Symbol.prototype)
console.log(o.__proto__ === Object.prototype)
console.log(func.__proto__ === Function.prototype)
console.log(c.__proto__ === ClassA.prototype, c.__proto__ === o1)
// 特殊
console.log(o1.__proto__ === o)
console.log(Object.prototype.__proto__ === null)

// 原生构造函数的原型
console.log(Number.__proto__ === Function.prototype)
console.log(String.__proto__ === Function.prototype)
console.log(Boolean.__proto__ === Function.prototype)
console.log(Symbol.__proto__ === Function.prototype)
console.log(Function.prototype === Function.__proto__)

console.log(Object.prototype)
