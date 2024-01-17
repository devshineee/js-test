const userAge = {
  // key: value
  name: 'Elena',
  age: 94  
}
const userEmail = {
  name: 'Elena',
  email: 'deveunhwa@gmail.com'
}

// const target = Object.assign(userAge ,userEmail)
const target = Object.assign({}, userAge ,userEmail)
console.log(target)
console.log(userAge)
console.log(target = userAge)

const a = { k: 123 }
const b = { k: 123 }
console.log(a === b) // false
