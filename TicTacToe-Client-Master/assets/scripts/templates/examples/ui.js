'use strict'

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  // clears the form
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}
const onCreateExampleSuccess = function () {
  successMessage('Created example successfully!')
}

const onCreateExampleFailure = function () {
  failureMessage('Creating example failed')
}




module.exports = {
  onCreateExampleSuccess,
  onCreateExampleFailure
}
