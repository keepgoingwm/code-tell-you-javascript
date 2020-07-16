function SuperClass(id) {
  this.superValue = [1, 2, 3]
  this.id = id
}

function SubClass(id) {
  SuperClass.call(this, id)
}

var s1 = new SubClass('s1')
var s2 = new SubClass('s2')
s1.superValue.push(4)
console.log(s1.id, s1.superValue)
console.log(s2.id, s2.superValue)