function inheritObject(o) {
  function F() {}
  F.prototype = o
  return new F()
}

function SuperClass() {
  this.value = 123
}

function createSubObject(str) {
  var o = inheritObject(new SuperClass())

  o.subFunc = function () {
    console.log(str)
  }

  return o
}

var sub1 = createSubObject('sub str')
console.log(sub1.value, sub1 instanceof SuperClass)
sub1.subFunc()