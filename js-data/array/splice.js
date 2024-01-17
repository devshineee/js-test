// .splice()
// 원본 수정됨

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

numbers.splice(2, 1) // 3, 4
numbers.splice(2, 0, 999) // 3, 4 index 2에서 0개 삭제하고 999삽입
console.log(numbers) // [1, 2, 999]
