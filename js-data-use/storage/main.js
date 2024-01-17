const { useLoaderData } = require("react-router-dom")

const user = {
  name: 'Elena',
  age: 94,
  emails: [
    'deveunhwa@gmail.com',
    'neo@zillinks.com'
  ]
}

// localStorage.setItem('user', JSON.stringify(user))
// console.log(JSON.parse(localStorage.getItem('user')))
// localStorage.removeItem('user')

const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age = 30
console.log(obj)
localStorage.setItem('user', JSON.stringify(obj))
