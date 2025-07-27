document.addEventListener('DOMContentLoaded', function() {
  const enterBtn = document.getElementById('enter-btn');
  const fadeBg = document.querySelector('.fade-bg');
  const ghost = document.getElementById('ghost');
  const poem = document.getElementById('poem');

  // Split poem into lines for animation
  const poemText = poem.textContent.trim().split('\n');
  poem.innerHTML = poemText.map(line => `<span class="line">${line}</span>`).join('');

  enterBtn.addEventListener('click', function() {
    fadeBg.style.opacity = 1;
    fadeBg.style.pointerEvents = 'auto';
    enterBtn.classList.add('hide');
    enterBtn.style.animation = 'none';

    setTimeout(() => {
      ghost.classList.add('move');
    }, 400);

    setTimeout(() => {
      const lines = poem.querySelectorAll('.line');
      let i = 0;
      function showLine() {
        if (i < lines.length) {
          lines[i].style.opacity = 1;
          i++;
          setTimeout(showLine, 700);
        }
      }
      poem.style.opacity = 1;
      showLine();
    }, 2400);
  });

  window.addEventListener('scroll', function() {
    const page1 = document.querySelector('.page1');
    const rect1 = page1.getBoundingClientRect();

    // Hide background ONLY when page 1 is in view
    if (rect1.bottom > 0 && rect1.top < window.innerHeight) {
      fadeBg.style.opacity = 0;
      fadeBg.style.pointerEvents = 'none';
    } else {
      fadeBg.style.opacity = 1;
      fadeBg.style.pointerEvents = 'auto';
    }

    // Reset ghost and poem only when page2 is out of view
    const page2 = document.querySelector('.page2');
    const rect2 = page2.getBoundingClientRect();
    if (rect2.bottom < 0 || rect2.top > window.innerHeight) {
      ghost.classList.remove('move');
      ghost.style.opacity = '';
      enterBtn.classList.remove('hide');
      enterBtn.style.animation = '';
      poem.style.opacity = 0;
      poem.querySelectorAll('.line').forEach(line => line.style.opacity = 0);
    }
  });
});