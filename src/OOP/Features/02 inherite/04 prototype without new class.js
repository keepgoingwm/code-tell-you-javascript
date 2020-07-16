// 不需要创建新的类
// 可以看做只是对原型继承的封装
function inheritObject(o) {
  function F() {}
  F.prototype = o
  return new F()
}

function SuperClass() {
  this.value = 123
}

var superObj = new SuperClass()
var sub1 = inheritObject(superObj)
var sub2 = Object.create(superObj)
console.log(sub1.value, sub1 instanceof SuperClass)
console.log(sub2.value, sub2 instanceof SuperClass)
