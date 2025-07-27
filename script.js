window.onload = function() {
  const batIds = ['bat1', 'bat2', 'bat3'];
  const batContainer = document.querySelector('.bat-container');
  const containerRect = batContainer.getBoundingClientRect();

  // Center for bat1 and bat3 (top right)
  const centerX = containerRect.width - 500;
  const centerY = 220;

  // Center for bat2 (top left)
  const centerX2 = 150; // 120px from left edge
  const centerY2 = 140; // 120px from top edge

  // Parameters for bat1 and bat3
  const bats = [0, 2].map(i => ({
    el: document.getElementById(batIds[i]),
    radius: 160 + Math.random() * 180,
    speed: 0.004 + Math.random() * 0.006,
    offset: Math.random() * Math.PI * 2,
    curveX: 80 + Math.random() * 100,
    curveY: 50 + Math.random() * 40
  }));

  // Separate parameters for bat2 (top left movement)
  const bat2 = {
    el: document.getElementById('bat2'),
    radius: 220 + Math.random() * 100,
    speed: 0.003 + Math.random() * 0.004,
    offset: Math.random() * Math.PI * 2,
    curveX: 120 + Math.random() * 80,
    curveY: 70 + Math.random() * 30
  };

  let t = 0;

  function moveBats() {
    t += 1;
    // Move bat1 and bat3 (top right)
    bats.forEach(bat => {
      const angle = bat.offset + t * bat.speed;
      const x = centerX + bat.radius * Math.cos(angle) + bat.curveX * Math.sin(angle * 2);
      const y = centerY + bat.radius * Math.sin(angle) + bat.curveY * Math.cos(angle * 1.5);
      bat.el.style.left = x + 'px';
      bat.el.style.top = y + 'px';
    });
    // Move bat2 (top left)
    const angle2 = bat2.offset + t * bat2.speed;
    const x2 = centerX2 + bat2.radius * Math.cos(angle2) + bat2.curveX * Math.sin(angle2 * 2);
    const y2 = centerY2 + bat2.radius * Math.sin(angle2) + bat2.curveY * Math.cos(angle2 * 1.5);
    bat2.el.style.left = x2 + 'px';
    bat2.el.style.top = y2 + 'px';

    requestAnimationFrame(moveBats);
  }

  moveBats();
};
