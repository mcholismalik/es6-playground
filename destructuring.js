// let data = [{
//   name: "Malik",
//   username: "malik_cm"
// }, {
//   name: "Tatang",
//   username: "tangs"
// }]

const renameProp = (oldProp, newProp, { [oldProp]: old, ...others }) => ({
  [newProp]: old,
  ...others
})

let json = {
  "name": 'cols',
  "long_name": 'cols banget',
}
json['short name'] = 'cls'

let json2 = renameProp('long_name', 'long name', json)
console.log(json2)



