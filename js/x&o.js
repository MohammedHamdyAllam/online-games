// get elements from html
let square1 = document.getElementById('square1');
let square2 = document.getElementById('square2');
let square3 = document.getElementById('square3');
let square4 = document.getElementById('square4');
let square5 = document.getElementById('square5');
let square6 = document.getElementById('square6');
let square7 = document.getElementById('square7');
let square8 = document.getElementById('square8');
let square9 = document.getElementById('square9');
let xPlayer = document.getElementById('x-player');
let oPlayer = document.getElementById('o-player');
let startButton = document.getElementById('start-button');
let informationOfGame = document.getElementById('information-of-game');
let resetBtn = document.getElementById('reset');
let collapse = document.getElementById('collapseExample');


// varibles
let turn = Math.floor(Math.random() * 2);
console.log(turn)


// start function
startButton.onclick = startFunc;

// function
function squaresFunc() {
    if(xPlayer.value == '' || oPlayer.value == '') {
        alert('write the names');
    }
    else {
        if(turn === 0) {
            this.innerText = 'x';
            turn = 1;
        }
        else{
            this.innerText = 'o';
            turn = 0;
        }
        this.onclick = stop();
    }
    function winner() {
        if(square1.innerText === 'x' && square2.innerText === 'x' && square3.innerText === 'x' || square4.innerText === 'x' && square5.innerText === 'x' && square6.innerText === 'x' || square7.innerText === 'x' && square8.innerText === 'x' && square9.innerText === 'x' || square1.innerText === 'x' && square4.innerText === 'x' && square7.innerText === 'x' || square2.innerText === 'x' && square5.innerText === 'x' && square8.innerText === 'x' || square3.innerText === 'x' && square6.innerText === 'x' && square9.innerText === 'x' || square1.innerText === 'x' && square5.innerText === 'x' && square9.innerText === 'x' || square3.innerText === 'x' && square5.innerText === 'x' && square7.innerText === 'x') {
            informationOfGame.innerText = `${xPlayer.value} is winner`;
            reset.style.display = 'block';
        }
        else if(square1.innerText === 'o' && square2.innerText === 'o' && square3.innerText === 'o' || square4.innerText === 'o' && square5.innerText === 'o' && square6.innerText === 'o' || square7.innerText === 'o' && square8.innerText === 'o' && square9.innerText === 'o' || square1.innerText === 'o' && square4.innerText === 'o' && square7.innerText === 'o' || square2.innerText === 'o' && square5.innerText === 'o' && square8.innerText === 'o' || square3.innerText === 'o' && square6.innerText === 'o' && square9.innerText === 'o' || square1.innerText === 'o' && square5.innerText === 'o' && square9.innerText === 'o' || square3.innerText === 'o' && square5.innerText === 'o' && square7.innerText === 'o') {
            informationOfGame.innerText = `${oPlayer.value} is winner`;
            reset.style.display = 'block';
        }
      }
    winner();
}

resetBtn.onclick = function() {
  square1.innerText = '';
  square2.innerText = '';
  square3.innerText = '';
  square4.innerText = '';
  square5.innerText = '';
  square6.innerText = '';
  square7.innerText = '';
  square8.innerText = '';
  square9.innerText = '';
  informationOfGame.innerText = '';
  resetBtn.style.display = 'none';
  startFunc();
}

// start function
function startFunc() {
    if(xPlayer.value == '' || oPlayer.value == '') {
        alert('write the names');
    }
    else {
        if(turn === 0) {
            informationOfGame.innerHTML = `${xPlayer.value} turn`;
        }
        else {
            informationOfGame.innerHTML = `${oPlayer.value} turn`;
        }
        square1.onclick = squaresFunc;
        square2.onclick = squaresFunc;
        square3.onclick = squaresFunc;
        square4.onclick = squaresFunc;
        square5.onclick = squaresFunc;
        square6.onclick = squaresFunc;
        square7.onclick = squaresFunc;
        square8.onclick = squaresFunc;
        square9.onclick = squaresFunc;
        collapse.className = 'collapse';
    }
    winFunc();
}

function winFunc() {
    if(square1.innerHTML == 'x' && square2.innerHTML == 'x' && square3.innerHTML == 'x' || square4.innerHTML == 'x' && square5.innerHTML == 'x' && square6.innerHTML == 'x' || square7.innerHTML == 'x' && square8.innerHTML == 'x' && square9.innerHTML == 'x' || square1.innerHTML == 'x' && square4.innerHTML == 'x' && square7.innerHTML == 'x' || square2.innerHTML == 'x' && square5.innerHTML == 'x' && square8.innerHTML == 'x'|| square3.innerHTML == 'x' && square6.innerHTML == 'x' && square9.innerHTML == 'x' || square1.innerHTML == 'x' && square5.innerHTML == 'x' && square9.innerHTML == 'x' || square3.innerHTML == 'x' && square5.innerHTML == 'x' && square7.innerHTML == 'x') {
        informationOfGame.innerHTML = `${xPlayer.value} is winner`;
    }
    else if(square1.innerHTML == 'o' && square2.innerHTML == 'o' && square3.innerHTML == 'o' || square4.innerHTML == 'o' && square5.innerHTML == 'o' && square6.innerHTML == 'o' || square7.innerHTML == 'o' && square8.innerHTML == 'o' && square9.innerHTML == 'o' || square1.innerHTML == 'o' && square4.innerHTML == 'o' && square7.innerHTML == 'o' || square2.innerHTML == 'o' && square5.innerHTML == 'o' && square8.innerHTML == 'o'|| square3.innerHTML == 'o' && square6.innerHTML == 'o' && square9.innerHTML == 'o' || square1.innerHTML == 'o' && square5.innerHTML == 'o' && square9.innerHTML == 'o' || square3.innerHTML == 'o' && square5.innerHTML == 'o' && square7.innerHTML == 'o') {
        informationOfGame.innerHTML = `${oPlayer.value} is winner`;
    }
}