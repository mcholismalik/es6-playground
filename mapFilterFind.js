
/**
 * Map vs Filter vs Find - ES6
 * @author mcholismalik
 */

// Data
let products = [
  { code: 'a', qty: 1 },
  { code: 'b', qty: 2 },
  { code: 'c', qty: 3 }
]

// Execute
let map = products.map(v => v.code === 'b')
let filter = products.filter(v => v.code === 'b')
let find = products.find(v => v.code === 'b')

// Result 
console.log({ map, filter, find })
// { map: [ false, true, false ],
//   filter: [ { code: 'b', qty: 2 } ],
//   find: { code: 'b', qty: 2 } }