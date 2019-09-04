/**
 * For vs Reduce - ES6
 * @author mcholismalik
 */

// Data
let products = [
  { code: 'a', qty: 1 }, 
  { code: 'b', qty: 2 }, 
  { code: 'c', qty: 3 }
]

// For
let countFor = 0
for (const p of products) {
  countFor += p.qty
}

// Reduce
let countRdc = products.reduce((p, c) => p + c.qty, 0)

// Return 
// countFor: 6, countReduce: 6