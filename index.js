// solutions

var a, b

beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})

//add
function add() {
  return (a + b)
}

//subtract
function subtract() {
  return (a - b)
}

//multiply  
function multiply() {
  return (a * b)
}

//divide
function divide() {
  return (a / b)
}

//inc
function inc() {
  return (a + 1)
}

//dec
function dec() {
  return (a - 1)
}

//makeInt
function makeInt() {
  return parseInt(a)
}

//preserveDecimal
function preserveDecimal() {
  return parseFloat(a)
}