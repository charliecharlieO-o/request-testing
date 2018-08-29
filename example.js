const requests = require('./index.js')

let logs = []

async function timeLog(next) {
  const start = Date.now()
  await next
  const ms = Date.now() - start
  return ms
}

async function asyncRequests() {
  try {
    console.log('Initiating requests')
    for (i = 0; i <= 1000; i++) {
      logs.push(await timeLog(
        requests.apiRequest('https://reqres.in/api/users?page=2')
      ))
      process.stdout.write('.')
    }
    console.log('\nCalculating average...')
    const seconds = logs.reduce((a, b) => a + b, 0)
    const average = seconds/1000
    console.log(`Time average per 1000 requests: ${average} ms or ${average/1000} sec`)
  } catch (err) {
    console.log(err)
  }
}

asyncRequests()
