// Get elements from HTML
let gameBoard = document.getElementById('game-board');
let playBtn = document.getElementById('play-btn');
// let snake = document.getElementById('snake');
// let apple = document.getElementById('apple');

// Create a main varibles
let appleX;
let appleY;
let snakeX = 5;
let snakeY = 10;
let moveX = 0;
let moveY = 0;
let snakeBody = [];

// change food position
const changeFoodPosition = () => {
  appleX = Math.floor(Math.random() * 30) + 1;
  appleY = Math.floor(Math.random() * 30) + 1;
}
changeFoodPosition();


// start function
const game = () => {
  // Create a game container
  let gameContainer = `<div id="apple" class="apple" style="grid-area: ${appleX} / ${appleY}"></div>`;
  // check if snake eat the apple
  if(snakeY === appleX && snakeX === appleY) {
    changeFoodPosition();
    snakeBody.push([appleX, appleY]);
  }
  else {
    console.log(snakeX);
    // appleX = snakeY
    console.log(appleX);
    console.log(snakeY);
    console.log(appleY);
  }
  // Make the snake body move before the main head
  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }
  // change first element of snake body
  snakeBody[0] = [snakeX, snakeY];
  // Update snake position
  snakeX += moveX;
  snakeY += moveY;
  // show game over func
  if(snakeX <= 0 || snakeY > 30 || snakeY <= 0 || snakeY > 30) {
    
  }
  // Adding parts of snake
  for (let i = 0; i < snakeBody.length; i++) {
    // Adding a div for each part of the snake's body
    gameContainer += `<div class="snake" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
  }
  // Add  gameContainer to gameBoard
  gameBoard.innerHTML = gameContainer;
};

// move function
const moveFunc = (e) => {
  if(e.key === 'ArrowUp') {
    moveX = 0;
    moveY = -1;
  }
  if(e.key === 'ArrowDown') {
    moveX = 0;
    moveY = 1;
  }
  if(e.key === 'ArrowLeft') {
    moveX = -1;
    moveY = 0;
  }
  if(e.key === 'ArrowRight') {
    moveX = 1;
    moveY = 0;
  }
}

// Create start game function
playBtn.onclick = setInterval(game, 125);

// Make snake move
document.addEventListener('keydown', moveFunc);


// Lose function
function lose() {
  Swal.fire({
    title: 'Gameover',
    text: 'you lost, click Ok to replay',
  }).then((result) => {
    if(result.isConfirmed) {
      location.reload();
    }
    else if (result.isDenied) {
      location.reload();
    }
  });
}


setInterval(() => {
  // lose script
  if(snakeX == 0 || snakeX >= 30 || snakeY == 0 || snakeY >= 30){
    lose();
  }
}, 100);
