/**
 * Promise.all - ES6
 * by @Cols
 * 
 * Case : if u wanna get promise data, that not sequence, use promise.all
 */

// Prepare
const [sec3, sec5] = [3000, 5000]
const prom = (v, sec) => (
  new Promise((res, rej) => {
    setTimeout(() => { res(v) }, sec)
  })
)

// Promise loop
const promiseLoop = async () => {
  let arrSec = [1000, 2000, 3000]
  console.time('promise-async-loop')
  let arrLoop = arrSec.map(async (v, i) => {
    await prom('prom-loop', v)
    console.log(`loop-${v, i}`)
    return `loop-${i}`
  })
  await Promise.all(arrLoop)
  // await Promise.all(arrSec.map(async (v, i) => { 
  //   await prom('prom-loop', v)
  //   console.log(`loop-${v,i}`)
  //   return `loop-${i}`
  // }))
  console.log('ini')
  console.timeEnd('promise-async-loop')
}

// Promise
// const combine1 = async () => {
//   console.time('promise-normal')
//   let d1 = await prom('prom1', sec5)
//   let d2 = await prom('prom2', sec3)
//   console.timeEnd('promise-normal')
// }
// const combine2 = async () => {
//   console.time('promise-all')
//   let data = await Promise.all([prom('prom1', sec5), prom('prom2', sec3)])
//   console.log(data)
//   console.timeEnd('promise-all')
// }

// Execute
promiseLoop()
// combine1()
// combine2()

