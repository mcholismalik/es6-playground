let funcPromise = async () => {
  let d = await funcPromiseFailed().catch(err => { throw err })
  console.log('disini')
  return d
}

let funcPromiseFailed = () => {
  return new Promise((res, rej) => {
    res('berhasil')
  })
}

/**
 * Case: ceritanya promisenya di errorin
 * Result: 
 * - error
 * 
 * Conclution: event loop ga berhenti tetep jalan
 */
let executeV1 = async () => {
  try {
    let d = await funcPromise()
    console.log('end')
  } catch (err) {
    console.log('error')
  }
}

/**
 * Case: ceritanya promisenya di errorin
 * Result: 
 * - error
 * - end
 * 
 * Conclution: event loop ga berhenti tetep jalan
 */
let executeV2 = async () => {
  let d = await funcPromise().catch(err => console.log('error'))
  console.log('end')
}


executeV1()
// executeV2()
