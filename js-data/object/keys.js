const userAge = {
  name: 'Elena',
  age: 94,
  email: 'deveunhwa@gmail.com'  
}

const keys = Object.keys(user)
console.log(keys)
// ['name', 'age', 'email']

console.log(user['email'])

const values = keys.map(key => user[key])
console.log(values)
