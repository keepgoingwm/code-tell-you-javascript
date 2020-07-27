function inheritObject(o) {
  function F() {}
  F.prototype = o
  return new F()
}

function inheritPrototype(subClass, superClass) {
  var p = inheritObject(superClass.prototype)
  p.constructor = subClass

  subClass.prototype = p
}

function SuperClass() {
  this.value = 123
}
SuperClass.prototype.getSuperValue = function() {
  return this.value
}

function SubClass() {
  SuperClass.call(this)
  this.subValue = 456
}
inheritPrototype(SubClass, SuperClass)
SubClass.prototype.getSubValue = function() {
  return this.subValue
}

var sub = new SubClass()
console.log(sub.getSuperValue(), sub.getSubValue())

module.exports = {
  inheritPrototype
}