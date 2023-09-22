// Get elemnts from HTML
let game = document.querySelector('.game');
let playBtn = document.getElementById('play-btn');

// Make start func
playBtn.onclick = () => {
  let collapse = document.getElementById('collapseExample');
  collapse.className = 'collapse';
  game.innerHTML = '<div class="block"></div>'.repeat(10000);
  let block = document.querySelectorAll('.block');
  block.forEach((block) => {
    block.ontoggle = () => {
      block.style.backgroundColor = "#f00";
    }
  });
}

// the best
// playBtn.onmouseenter
// playBtn.onmouseout
// playBtn.onmouseover
// playBtn.onmouseup
// playBtn.onmousedown
// playBtn.ondrag
// playBtn.ondragover
// playBtn.ondragstart
// playBtn.ontouchmove // imp
// playBtn.ontouchstart
// playBtn.onpointermove
// playBtn.ontoggle