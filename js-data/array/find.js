// .find() .findIndex()

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

const a = fruit.find(fruit => {
  return /^B/.test(fruit)
})
console.log(a) // Banana

const b = fruit.findIndex(fruit => /^C/.test(fruit))
console.log(b) // 2
