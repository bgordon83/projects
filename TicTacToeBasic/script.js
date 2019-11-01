var themeSong = new Audio('good-bad-ugly.ogg');
themeSong.play();

let empty = '.';
let board = [
  [empty, empty, empty],
  [empty, empty, empty],
  [empty, empty, empty],
];
let xo = "XO";

let playerColors = ['card.png', 'whip.png'];
let currentPlayer = 0;

let gameOver = false;

function checkForWinner(row, col) {
  
  // check all pieces same row
  let matches = 0;
  for(let i=0;i<3;i++) {
    if(board[row][i] == board[row][col]) {
      console.log(board[row][i] + " " + board[row][col]);
      matches += 1;
    }
  }
  if(matches == 3) {
    console.log("Horizontal match!");
    for(let i=0;i<3;i++) {
      document.getElementById("square" + row + i).style.border = "2px solid red";
    }
    document.getElementById("game_status").innerHTML = "<img src='" + playerColors[board[row][col]] + "'> WINS";
    return true;
  }

  // check all pieces same col
  matches = 0;
  for(let i=0;i<3;i++) {
   if(board[i][col] == board[row][col]) {
     console.log(board[i][col] + " " + board[row][col]);
     matches += 1;
   }
  }
  if(matches == 3) {
   console.log("Vertical match!");
   for(let i=0;i<3;i++) {
     document.getElementById("square" + i + col).style.border = "2px solid red";
   }
   document.getElementById("game_status").innerHTML = "<img src='" + playerColors[board[row][col]] + "'> WINS";
   return true;
  }

  matches = 0;
  for(let i=0;i<3;i++) {
   if(board[i][i] == board[row][col]) {
     console.log(board[i][col] + " " + board[row][col]);
     matches += 1;
   }
  }
  if(matches == 3) {
   console.log("Right Diagonal Match!");
   for(let i=0;i<3;i++) {
     document.getElementById("square" + i + i).style.border = "2px solid red";
   }
   document.getElementById("game_status").innerHTML = "<img src='" + playerColors[board[row][col]] + "'> WINS";
   return true;
  }

  matches = 0;
  for(let i=0;i<3;i++) {
   if(board[2-i][i] == board[row][col]) {
     console.log(board[2-i][col] + " " + board[row][col]);
     matches += 1;
   }
  }
  if(matches == 3) {
   console.log("Left Diagonal Match!");
   for(let i=0;i<3;i++) {
     document.getElementById("square" + (2-i) + i).style.border = "2px solid red";
   }
   document.getElementById("game_status").innerHTML = "<img src='" + playerColors[board[row][col]] + "'> WINS";
   return true;
  }



  return false;
}

function clickedSquare(e) {
   if(gameOver == true) {
     return;
   }
   let row = e.srcElement.getAttribute("id").substring(6)[0];
   let col = e.srcElement.getAttribute("id").substring(6)[1];
   
   if(board[row][col] != empty) {
     alert("ALREADY TAKEN!");
   }
   else {
     board[row][col] = currentPlayer;
     e.srcElement.style.backgroundImage = "url('"+playerColors[currentPlayer]+"')";
     e.srcElement.innerHTML = xo[currentPlayer];
     if(checkForWinner(row, col) == true) {
       gameOver = true;
       console.log("GAME OVER!");
     }
     else {
       switchPlayer();
       updateScreen();
     }
   }
}

function switchPlayer() {
  currentPlayer = 1 - currentPlayer;
}

function resetGame() {
  var squares = document.getElementsByClassName('square');
  for(var i = 0; i < squares.length; i++) {
      squares[i].style.border = "2px solid black";
      board =  [
        [empty, empty, empty],
        [empty, empty, empty],
        [empty, empty, empty],
      ];
      squares[i].style.backgroundImage = "none";
      squares[i].innerHTML = "";
  }
  gameOver = false;
  updateScreen();
}

function makeSquaresClickable() {
  var squares = document.getElementsByClassName('square');
  for(var i = 0; i < squares.length; i++) {
      squares[i].onclick = clickedSquare;
  }  
}

function makeResetClickable() {
  var reset_button = document.getElementById("reset_button");
  reset_button.onclick = resetGame;
}

function updateScreen() {
  document.getElementById("current_player").innerHTML = playerColors[currentPlayer];
  document.getElementById("game_status").innerHTML = "<img src='" + playerColors[currentPlayer] + "'>'s turn.";
}

window.onload = function() {
    makeSquaresClickable();
    updateScreen();
    makeResetClickable();
}
