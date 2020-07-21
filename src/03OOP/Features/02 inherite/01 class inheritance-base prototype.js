function SuperClass() {
  this.superValue = 'super'
}
SuperClass.prototype.getSuperValue = function() {
  return this.superValue
}

function SubClass() {
  this.subValue = 'sub'
}
SubClass.prototype = new SuperClass()
SuperClass.prototype.getSubValue = function() {
  return this.subValue
}

var s = new SubClass()
console.log(s.getSuperValue())
console.log(s.getSubValue())