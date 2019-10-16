const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

let currentPlayer = 'X'
// let winner = false
// let message

const switchPlayer = function () {
  if (currentPlayer === 'X') {
    $('#game-notification').text('Player Os Turn')
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
    $('#game-notification').text('Player Xs Turn')
  }
}
