var o = { a: 1 }

function Parent() {

}
Parent.prototype = Object.create(o)

function Children() {

}
Children.prototype = Parent
var child = new Children()

console.log(child.__proto__)
console.log(child instanceof Parent, child instanceof a)
console.log(Object instanceof Function, Function instanceof Object)
