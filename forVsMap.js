/**
 * For vs Map - ES6
 * @author mcholismalik
 */

const log = objLog => console.log(objLog)

// 1000 = 1 sec
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const endpoint = (sleepTime, rejected) =>
  new Promise(async (res, rej) => {
    await sleep(sleepTime)
    if (rejected) rej(false)
    res(true)
  })

const fetchEndpoint = async (name, key, sleepTime, rejected = false) => {
  console.time(key)
  const response = await endpoint(sleepTime, rejected)
  console.timeEnd(key)
  log({ name, key, response })
}

const loopMapPromise = async endpoints => {
  const name = 'mapPromise'
  log(`== running ${name} ==`)
  console.time(name)

  if (Array.isArray(endpoints)) {
    await Promise.all(
      endpoints.map(async (v, i) => {
        const key = (i + 1).toString()
        const rejected = i == 0 ? true : false
        await fetchEndpoint(name, key, v, rejected)
      })
    )
  } else {
    await Promise.all(
      Object.keys(endpoints).map(async k => {
        await fetchEndpoint(name, k, endpoints[k])
      })
    )
  }

  console.timeEnd(name)
}

const loopForPromise = async endpoints => {
  const name = 'forPromise'
  log(`== running ${name} ==`)
  console.time(name)

  if (Array.isArray(endpoints)) {
    for (let i = 0; i < endpoints.length; i++) {
      const key = (i + 1).toString()
      await fetchEndpoint(name, key, endpoints[i])
    }
  } else {
    for (let k in endpoints) {
      await fetchEndpoint(name, k, endpoints[k])
    }
  }

  console.timeEnd(name)
}

const loopAllPromise = async param => {
  // endpoints
  const arrEndpoint = [5000, 2000, 7000]
  const objEndpoint = {
    one: 5000,
    two: 2000,
    three: 7000
  }
  const endpoints = arrEndpoint

  // log
  log(' ')
  if (Array.isArray(arrEndpoint)) {
    log('=== USE ARRAY ENDPOINT ===')
  } else {
    log('=== USE OBJECT ENDPOINT ===')
  }
  log(' ')

  // run
  await Promise.all([
    // loopForPromise(endpoints)
    loopMapPromise(endpoints)
  ])
}

loopAllPromise()
