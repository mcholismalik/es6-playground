function test(a,b) {
  console.log('test'+a+b)
}

let nmFunc = 'test'

let a = 'coba a'
let b = 'coba b'
eval(`test(a,b)`)