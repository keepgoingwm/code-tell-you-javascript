function createProduct(type, name, time) {
  var o = new Object()
  o.type = type
  o.name = name
  o.time = time
  o.getName = function() {
    return this.name
  }

  if (type === '???') {
    // something special
  }

  return o
}

var p1 = createProduct('type1', 'xiaoming', 123)
var p2 = createProduct('type2', 'wangwang', 456)
console.log(p1.getName())
console.log(p2.getName())