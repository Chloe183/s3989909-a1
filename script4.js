document.addEventListener('DOMContentLoaded', function() {
  // Spider crawling code
  const spider = document.getElementById('spider');
  const page5Content = document.querySelector('.page5 .content');
  if (!spider || !page5Content) return;

  // Area in px from top of .content (move only vertically)
  const area = {
    minY: 0,
    maxY: 300 // Adjust as needed for how far down the spider can crawl
  };

  let currentY = area.minY;
  let targetY = area.minY;

  function pickNewTarget() {
    targetY = area.minY + Math.random() * (area.maxY - area.minY);
  }

  // Start at a random position
  pickNewTarget();
  currentY = targetY;
  pickNewTarget();

  function animate() {
    const speed = 0.03; // Bat-like smoothness
    currentY += (targetY - currentY) * speed;

    spider.style.left = '-45vw'; // Keep your fixed left position
    spider.style.top = currentY + 'px';

    if (Math.abs(currentY - targetY) < 3) {
      pickNewTarget();
    }

    requestAnimationFrame(animate);
  }

  spider.style.position = 'absolute';
  spider.style.zIndex = 22;

  animate();

  // Hide/show logic for page 5
  const closeBtn = document.getElementById('close-btn');
  const poem3 = document.getElementById('poem3');
  const spiderweb = document.getElementById('spiderweb');
  const h5 = document.getElementById('the-end');
  const background1 = document.getElementById('background1');
  const page5 = document.querySelector('.page5');

  function hidePage5Content() {
    if (poem3) poem3.style.display = 'none';
    if (closeBtn) closeBtn.style.display = 'none';
    if (spider) spider.style.display = 'none';
    if (spiderweb) spiderweb.style.display = 'none';
    if (background1) background1.style.display = 'none';
    if (h5) {
      h5.style.display = 'block';
      h5.style.position = 'absolute';
      h5.style.left = '50%';
      h5.style.top = '50%';
      h5.style.transform = 'translate(-50%, -50%)';
      h5.style.zIndex = 200;
    }
  }

  function showPage5Content() {
    if (poem3) poem3.style.display = '';
    if (closeBtn) closeBtn.style.display = '';
    if (spider) spider.style.display = '';
    if (spiderweb) spiderweb.style.display = '';
    if (background1) background1.style.display = '';
    if (h5) h5.style.display = 'none';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', hidePage5Content);
  }

  // Reset page 5 when you scroll away and back
  window.addEventListener('scroll', function() {
    if (!page5) return;
    const rect = page5.getBoundingClientRect();
    // If page 5 is not in view, reset
    if (rect.bottom < 0 || rect.top > window.innerHeight) {
      showPage5Content();
    }
  });
});