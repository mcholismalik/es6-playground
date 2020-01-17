/**
 * For vs Reduce - ES6
 * @author mcholismalik
 */

// Data
let products = [
  { code: 'a', amount: 200, fee: 50 }, 
  { code: 'b', amount: 200, fee: 50 }, 
  { code: 'c', amount: 200, fee: 50 }
]

// For
let countFor = 0
for (const p of products) {
  countFor += p.qty
}

// Reduce
let countRdc = products.reduce((p, c) => p + (c.amount - c.fee), 0)
// console.log(countRdc)
// Return 
// countFor: 6, countReduce: 6

let result = (5 + 2 + 2 + 1)  * 10 / 100
console.log(result) 