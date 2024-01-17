// 변수 유효범위 (variable Scope)
// var, let, const

function scope() {
  // console.log(a)
  if (true) {
    // console.log(a)
    const a = 123
    console.log(a)
  }
  // console.log(a)
}

scope()
