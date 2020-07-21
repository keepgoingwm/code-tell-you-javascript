function ClassA() {

}

ClassA.staticFunc = function() {
  console.log('staticFunc')
}
ClassA.staticProp = 1

ClassA.staticFunc()
console.log(ClassA.staticProp)