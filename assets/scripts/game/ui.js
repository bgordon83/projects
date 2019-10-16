const store = require('../store')

const createGameSuccess = function(data) {
  // need to post message when we successfully created a game
  $('#message').html('Started New Game')
  $('#message').html('success message')
  $('#message').html('error-message')
  // need to store the game 
  store.game = data.game
}
