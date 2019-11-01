'use strict'
const store = require('../store')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('#message').text(newText)

}

const onSignUpSuccess = () => {
  successMessage('Signed up Successfully!')
  $('#message').css('color', 'green')
}

const onSignUpFailure = () => {
  failureMessage('Signed up Failed')
  console.log('sign up failed')

}
const onSignInSuccess = (responseData) => {
  successMessage('Signed in Successfully')
  store.user = responseData.user
  $('#sign-up, #sign-in').hide()
  $('#game').show()
  $('#change-password').show()
  $('#sign-out').show()
}

const onSignInFailure = function () {
  $('#message').
}

const onChangePasswordSuccess = function () {
  successMessage('Changed password successfully')
  $('#message').css('color', 'green')
}

const onChangePasswordFailure = function () {
  failureMessage('Changed password Failed')
}

const onSignOutSuccess = function () {
  successMessage('Signed out successfully')
  $('#sign-up, #sign-in').show()
  $('#sign-out').hide()
}

const onSignOutFailure = function () {
  failureMessage('Signed out failed')
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
