const pi = 3.14159265358979
console.log(pi)

// toFixed 소수점 a 자리까지 남겨두고 제거
const str = pi.toFixed(2)
console.log(str) // 3.14
console.log(typeof str) // string

// parseInt 정수단위
const integer = parseInt(str) // 3
// parseFloat 소수단위
const float = parseFloat(str) // 3.14
console.log(integer)
console.log(float)
console.log(typeof integer, typeof float)
