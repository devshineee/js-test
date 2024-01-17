// 구조 분해 할당 (Destructuring assignment)
// 비구조화 할당

const user = {
  name: 'Elena',
  age: 94,
  email: 'deveunhwa@gmail.com'  
}
// const { name, age, email, address } = user
const { name: elena, age, address = 'Korea' } = user
// E.g, user.address

console.log(`사용자의 이름은 ${name}입니다.`)
console.log(`${name}의 나이는 ${age}입니다.`)
console.log(`${name}의 이메일 주소는 ${user.email}입니다.`)
console.log(address)

const fruits = ['Apple', 'Banana', 'Cherry']
// const [a, b, c, d] = fruits
const [, , b] = fruits
console.log(a, b, c, d)
console.log(b)
