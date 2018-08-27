const util = require('util')
const rp = require('request-promise')
const rf = require('req-fast')
const cheerio = require('cheerio')

module.exports = {

  apiRequest() {
    const options = {
      uri: 'https://reqres.in/api/users?page=2',
      forever: true,
      json: true
    }
    return rp(options)
  },
  apiRequestFast() {
    const options = {
      uri: 'https://reqres.in/api/users?page=2',
      forever: true 
    }
    const rfAsync = util.promisify(rf)
    return rfAsync(options)
  },
  scrapRequest() {
    const options = {
      uri: 'https://my.callofduty.com/wwii/stats/leaderboard',
      transform: function (body) { return cheerio.load(body)}
    }
    return rp(options)
  }

}
