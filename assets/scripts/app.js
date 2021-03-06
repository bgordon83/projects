 'use strict'// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.')
const gameEvent = require('./game/event')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
})
