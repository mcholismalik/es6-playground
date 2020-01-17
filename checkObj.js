let obj = {
  name: 'cholis',
  age: 21,
  amount: '100000.12'
}
// let obj2 = { ...obj, name: 'ghozi' }

let { name, ...obj3 } = obj

console.log(obj3)