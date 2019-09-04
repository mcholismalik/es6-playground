// // date
// let date1 = '2019-06-28'
// let date2 = '2019-05-30'

// let timestamp1 = new Date(date1).getTime()
// let timestamp2 = new Date(date2).getTime()

// if(timestamp1 > timestamp2) {
//     console.log('true')
// }


// get timestamp
// let timestamp = new Date('2019-06-28').getTime()
// let timestamp = Math.floor(Date.now()) // ms
// let timestamp = Math.floor(Date.now() / 1000) // s

// get date
// let human = new Date(timestamp)
// human = new Date(human - human.getTimezoneOffset() * 60000)
// let iso = human.toISOString().split('T')[0]

// get date 2
// let date2 = new Date('2016-06-28T00:00:00')
// date2 = new Date(date2 - date2.getTimezoneOffset() * 60000)

// let days = 3
// let addDays = new Date(timestamp)
// addDays.setDate(addDays.getDate() + days)
// let iso = addDays.toISOString().split('T')[0]

// console.log({addDays, iso})
// console.log({ timestamp, human, iso })
// console.log({timestamp, timestamp2})

// let human = new Date()
// human = new Date(human - human.getTimezoneOffset() * 60000)
// let iso = human.toISOString().split('T')[0]



// let d1 = new Date()
// let d2 = new Date('2019-09-01')
// let timeDiff = d2.getTime() - d1.getTime()
// let dayDiff = timeDiff / (1000 * 3600 * 24)

// console.log(Math.ceil(dayDiff))

// const dateIso = (datetime) => {
//   let date = new Date(datetime)
//   date = new Date(date - date.getTimezoneOffset() * 60000)
//   const iso = date.toISOString().split('T')[0]
//   return iso
// }

console.log(dateIso(new Date()))