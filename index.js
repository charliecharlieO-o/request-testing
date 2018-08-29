const rp = require('request-promise')

module.exports = {

  apiRequest(url) {
    const options = {
      uri: url,
      forever: true,
      json: true
    }
    return rp(options)
  }

}
