var { inheritPrototype } = require('../Features/02 inherite/06 compositive parastic')

function AbstractClass() {}
AbstractClass.prototype.func1 = function() {
  return new Error('no implements')
}
AbstractClass.prototype.func2 = function() {
  throw new Error('no implements')
}

function SubClass() {}
inheritPrototype(SubClass, AbstractClass)
SubClass.prototype.func1 = function() {
  console.log('run func1')
}

var sub = new SubClass()
sub.func1()
sub.func2()