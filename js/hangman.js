// get elemnet from html
let lettersContainer = document.getElementById('letters');
let lettersGuessContainer = document.querySelector('.letters-guess');
let arBtn = document.querySelector('.ar');
let enBtn = document.querySelector('.en');
let playBtn = document.getElementById('play-btn');
let collapse = document.getElementById('collapseExample');

console.log(arBtn);
console.log(enBtn);

// language function
arBtn.onclick = () => {
  letters = Array.from('ابتثجحخدذرزسشصضطظعغفقكلمنهوي');
  words = {
    programming: ['جافاسكريبت', 'لارافل', 'فلاتر'],
    games: ['ماينكرافت', 'فورتنيات', 'روبلوكس', 'فري فاير', 'ببجي', 'بربي'],
    countries: ['مصر', 'اليمن', 'المغرب', 'الصين', 'سوريا', 'قطر', 'الولايات المتحدة الامريكية', 'المانيا', 'عمان', 'روسيا'],
    animeCharacters: ['ناروتو', 'ايرين ييغر', 'ساسكي', 'ميكاسا', 'كونان', 'زورو'],
    FamousPeople: ['اسامة الزيرو', 'ايلون ماسك', 'بيل جيتس', 'محمد حمدي'],
  }
  // Editing styles
  // ar style
  arBtn.style.backgroundColor = '#333';
  arBtn.style.color = '#fff';
  arBtn.style.pointerEvents = 'none';
  // en style
  enBtn.style.backgroundColor = '#0f0';
  enBtn.style.color = '#000';
  enBtn.style.pointerEvents = 'all';
}
enBtn.onclick = () => {
  letters = Array.from('abcdefghijklmnopqrstuvwxyz');
  words = {
    programming: ['HTML', 'CSS', 'Javascript', 'PHP', 'Go', 'laravel', 'flutter', 'node js'],
    games: ['minecraft', 'fortnite', 'gta v', 'roblox', 'free fire', 'pubg', 'barby'],
    countries: ['Egypt', 'Yemen', 'Morocco', 'china', 'Syria', 'Qater', 'united state', 'germany', 'Oman', 'Russia'],
    animeCharacters: ['naruto', 'eren yeager', 'sasuki', 'mikasa', 'konan', 'zoro'],
    FamousPeople: ['osama elzero', 'elon mask', 'bill gates', 'Mohammed Hamdy'],
  }
  // Editing styles
  // en style
  enBtn.style.backgroundColor = '#333';
  enBtn.style.color = '#fff';
  enBtn.style.pointerEvents = 'none';
  // ar style
  arBtn.style.backgroundColor = '#0f0';
  arBtn.style.color = '#000';
  arBtn.style.pointerEvents = 'all';
}


// varibles
let letters = Array.from('abcdefghijklmnopqrstuvwxyz');
let win = 0;

// sounds
let succesSound = new Audio('../audio/hangman-succes.mp3');
let failSound = new Audio('../audio/hangman-fail.mp3');
let loseSound = new Audio('../audio/hangman-lose.mp3');


// Object of words
let words = {
  programming: ['HTML', 'CSS', 'Javascript', 'PHP', 'Go', 'laravel', 'flutter', 'node js'],
  games: ['minecraft', 'fortnite', 'gta v', 'roblox', 'free fire', 'pubg', 'barby'],
  countries: ['Egypt', 'Yemen', 'Morocco', 'china', 'Syria', 'Qater', 'united state', 'germany', 'Oman', 'Russia'],
  animeCharacters: ['naruto', 'eren yeager', 'sasuki', 'mikasa', 'konan', 'zoro'],
  FamousPeople: ['osama elzero', 'elon mask', 'bill gates', 'Mohammed Hamdy'],
}

// play function
playBtn.onclick = () => {
  // collapse function
  collapse.className = 'collapse';
  // Get random word and more proeprties
  let allKeys = Object.keys(words);
  let randomPropNum = Math.floor(Math.random() * allKeys.length);
  let randomPropName = allKeys[randomPropNum];
  let randomPropVlaue = words[randomPropName];
  let randomNumValue = Math.floor(Math.random() * randomPropVlaue.length);
  let randomPropWord = randomPropVlaue[randomNumValue];

  // Use the random proeprties
  document.querySelector('.game-info .game-category span').innerHTML = randomPropName + ' ' + randomPropWord;
  let lettarsAndSpaces = Array.from(randomPropWord);

  // remove spaces
  lettarsAndSpaces.forEach(letters => {
    let emptySpan = document.createElement('span');
    // if letter is space
    if(letters === ' ') {
      emptySpan.className = 'space-word';
    }
    lettersGuessContainer.appendChild(emptySpan);
  });
  // arrays
  let lettersArray = Array.from(letters);
  lettersArray.forEach(letter => {
    let spanElement = document.createElement('span');
    let theLetter = document.createTextNode(letter);
    spanElement.appendChild(theLetter);
    spanElement.className = 'letter-box';
    lettersContainer.appendChild(spanElement);
  });
  // selcet span
  let guessSpans = document.querySelectorAll('.letters-guess span');

  // Set wrong attempts
  let wrongAttempts = 0;

  // select the draw elements
  let theDraw = document.querySelector('.hangman-draw');

  // change win number
  if(Array.from(randomPropWord.toLowerCase()).includes(' ')) {
    win++;
  }
  // Handle Clicking On Letters
  document.addEventListener('click', (e) => {
    // Set the chose status
    let theStatus = false;
    if(e.target.className === 'letter-box') {
      e.target.classList.add('clicked');
      // clicked letter
      let theClickedletter = e.target.innerHTML.toLowerCase();
      // chosen word
      let theChosenword = Array.from(randomPropWord.toLowerCase());
      // loop chosen word
      theChosenword.forEach((wordLetter, wordIndex) => {
        if(theClickedletter == wordLetter) {
          guessSpans.forEach((span, spanIndex) => {
            if(wordIndex === spanIndex) {
              span.innerHTML = theClickedletter;
              theStatus = true;
            }
          });
        }
      })
      if(theStatus !== true) {
        wrongAttempts++;
        theDraw.classList.add(`worng-${wrongAttempts}`);
        failSound.play();
        if(wrongAttempts === 8) {
          lettersContainer.classList.add('finished');
          loseSound.play();
          endGame();
        }
      }
      else {
        succesSound.play();
        let result = [];
        function reapetElements(arr) {
          for(let index = 0; index < arr.length; index++) {
            if(!result.includes(arr[index])) {
              result.push(arr[index])
            }
          }
          return result;
        }
        console.log(reapetElements(theChosenword))
        win++;
        console.log(win);
        console.log(theChosenword);
        endGame();
      }
      // end game function
      function endGame() {
        if(wrongAttempts >= 8) {
          Swal.fire({
            title: 'Game over',
            showCloseButton: true,
            confirmButtonText: 'Play Again',
          }).then((result) => {
            if(result.isConfirmed) {
              window.location.reload();
            }
            else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          });
        }
        else if(win >= reapetElements(theChosenword).length) {
          const swalWon = Swal.mixin({
            customClass: {
              confirmButton: 'popup-btn',
            },
            buttonsStyling: true,
          })
          swalWon.fire({
            title: 'Congratulations You Won🥳🎉',
            text: `You have ${wrongAttempts} wrong`,
            showCloseButton: true,
            confirmButtonText: 'Play Again',
            reverseButtons: true,
          }).then((result) => {
            if(result.isConfirmed) {
              location.reload();
            }
            else if (result.isDenied) {
              location.reload();
            }
          });
        }
      }
    }
  });
}
