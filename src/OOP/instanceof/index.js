var o = { a: 1 }

function Parent() {

}
Parent.prototype = Object.create(o)

function Children() {

}
Children.prototype = new Parent()
Children.prototype.constructor = Children
var child = new Children()

console.log(child.__proto__)
console.log(child instanceof Parent)
console.log(Children.prototype instanceof Parent)
console.log(child instanceof Object)

//
console.log(Object instanceof Function, Function instanceof Object)