/**
 * Restructuring Object - JS ES6
 * @author mcholismalik
 */

// Newbie
let account_name1 = 'malik'
let body1 = {
  vendor_id: 1,
  account_number: 9987072
}
let obj1 = {
  vendor_id: body1.vendor_id,
  account_number: body1.account_number,
  account_name: account_name1
}

// arr.map(({ importRecord: { ['import']: importId } = {}}) => importId || null)

// for(i in obj1) {
//   let 
// }

let { account_number, account_number2 = null } = obj1

console.log(account_number)

// console.log(obj1)

// Pro
// let account_name2 = 'malik'
// let body2 = {
//   vendor_id: 1,
//   account_number: 9987072
// }
// let obj2 = { ...body2, account_name2 }

// let { account_number, ...obj3 } = obj2

// let obj4 = {
//   ...obj3,
//   description: 'test'
// }

// Result
// console.log({ obj4 })
