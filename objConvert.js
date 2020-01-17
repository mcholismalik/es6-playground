const object = () => {
  console.time('Prepared data =>')
  let users = []
  let n = 1000000
  for (let i = 0; i < n; i++) {
    let d = { name: 'Cholis', age: 21 }
    users.push(d)
  }
  console.timeEnd('Prepared data =>')
  return users
}

const convMap = users => {
  console.time('Convert map =>')
  let usersArr = users.map(v => {
    return [v.name, v.age]
  })
  console.timeEnd('Convert map =>')
  return usersArr
}

const convFor = users => {
  console.time('Convert for =>')
  let usersArr = []
  for(let i = 0; i<users.length; i++) {
    usersArr.push([users[i].name, users[i].age])
  }
  console.timeEnd('Convert for =>')
  return usersArr
}

let users = object()
// let usersArr = convMap(users)
let usersArr = convFor(users)
console.log(usersArr.length)

/**
 * Result (n = 1000k)
 * For = 180.593ms
 * Map = 320.682ms
 */