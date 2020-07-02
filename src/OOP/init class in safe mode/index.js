function ClassA(param1) {
  if (this instanceof ClassA) {
    this.prop1 = param1
    this.func1 = function() {
      console.log('run func1' + ' ' + this.param1)
    }
  } else {
    return new ClassA(param1)
  }
}

var c = ClassA('haha')
c.func1()