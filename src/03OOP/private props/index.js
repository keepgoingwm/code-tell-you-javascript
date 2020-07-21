var Book = (function() {
  var privProp1 = 1
  var privProp2 = 'string'

  return function() {
    this.func1 = function() {
      console.log(privProp1)
    }
    this.func2 = function() {
      console.log(privProp2)
    }
  }
})()

var b = new Book()
b.func1()
b.func2()
