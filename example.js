const requests = require('./index.js')

async function timeLog(next) {
  const start = Date.now()
  await next
  const ms = Date.now() - start
  return ms
}

async function asyncRequests() {
  try {
    console.log('Initiating library tests...\n')
    // Calling STD function
    t1 = await timeLog(requests.apiRequest())
    console.log(`Standard Promise Request: ${t1}ms`)
    // Calling Fast function
    t2 = await timeLog(requests.apiRequestFast())
    console.log(`Fast Request Library: ${t2}ms`)
    // Scrapping
    t3 = await timeLog(requests.scrapRequest())
    console.log(`Scrapping website: ${t3}ms\n`)
    console.log('FINISHED')
  } catch (err) {
    console.log(err)
  }
}

asyncRequests()
