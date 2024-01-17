// 전개 연산자 (Spread)

const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']
console.log(fruits)
console.log(...fruits)
// console.log('Apple', 'Banana', 'Cherry')

// function toObject(a, b, c) {
//   return {
//     a: a,
//     b: b,
//     c: c
//   }
// }

// function toObject(a, b, ...c) {
//   return {a, b, c}
// }
// console.log(toObject(...fruits))

const toObject = (a, b, ...c) => ({a, b, c})
console.log(toObject(...fruits))
