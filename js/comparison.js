// 비교 연산자 (comparison-operator)

const a = 1
const b = 1

console.log(a === b)
console.log(a !== b)
console.log(a < b)
console.log(a > b)
console.log(a <= b)
console.log(a >= b)

function isEqual(x, y) {
  return x === y
}

console.log(isEqual(1, 1))
console.log(isEqual(2, '2'))
