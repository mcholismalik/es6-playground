/**
 * Spread operators - ES6 Tips
 */

// Data from request
let data = {
  vendor_id: 1,
  acc_number: 9982,
  acc_name: 'Cols',
  title: 'Remote worker'
}
const role = 'Manager'

/** 1 Add role **/
// OLD
const { vendor_id, acc_number, acc_name, title } = data
const oldWay = { vendor_id, acc_number, acc_name, title, role }

// NEW
const newWay = { ...data, role }

/** 2 Delete acc_number **/
// OLD
const { vendor_id, acc_name, title } = data
const oldWay = { vendor_id, acc_name, title }

// NEW
const { acc_number, ...data2 } = data
const newWay = { ...data2 }

// console.log({ oldWay, newWay })