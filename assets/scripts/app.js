'use strict'
 
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const store = require('./store.js')
const authEvents = require('./auth/events.js')

$(() => {
  
  $('#sign-up').on('submit', authEvents.onSignUp)
    $('#sign-in').on('submit', authEvents.onSignIn)
    $('#sign-out').on('submit', authEvents.onSignOut)

})
