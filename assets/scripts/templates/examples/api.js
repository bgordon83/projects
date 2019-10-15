'use strict'

const config = require('../config')
// require `store` so we have access to our `token`
// so the API knows who we are
const store = require('../store')

const createExample = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/examples',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  createExample
}
