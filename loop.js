/**
 * For vs Map - ES6
 * @author mcholismalik
 */

let data = [
  {
    product: "LAPTOP",
    qty: 2
  },
  {
    product: "MOUSE",
    qty: 1
  }
]

// Newbie
const productsNewbie = []
for (let i in data) {
  productsNewbie.push(data[i].product)
}

// PRO
const productsPro = data.map(v => v.product)

console.log({ productsNewbie, productsPro })
