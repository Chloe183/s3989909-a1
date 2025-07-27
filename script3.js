document.addEventListener('DOMContentLoaded', function() {
  // Chair hover effect (keep your existing code for Chair2/Chair1/Ghost1)
  const chair2 = document.getElementById('Chair2');
  const chair1 = document.getElementById('Chair1');
  const ghost1 = document.getElementById('Ghost1');

  if (chair2 && chair1 && ghost1) {
    chair2.addEventListener('mouseenter', function() {
      chair2.style.opacity = 0;
      chair2.style.pointerEvents = 'none';
      chair1.style.opacity = 1;
      chair1.style.pointerEvents = 'auto';
      setTimeout(() => {
        ghost1.style.opacity = 1;
      }, 500);
    });

    chair1.addEventListener('mouseleave', function() {
      ghost1.style.opacity = 0;
      chair1.style.opacity = 0;
      chair1.style.pointerEvents = 'none';
      setTimeout(() => {
        chair2.style.opacity = 1;
        chair2.style.pointerEvents = 'auto';
      }, 500);
    });
  }

  // Poem2 and utensils scroll effect
  const page4 = document.querySelector('.page4');
  const poem2 = document.getElementById('poem2');
  const fork = document.getElementById('fork');
  const spoon = document.getElementById('spoon');
  const knife = document.getElementById('knife');
  const plate1 = document.getElementById('plate1');
  const plate2 = document.getElementById('plate2');

  function hidePoem2Utensils() {
    if (poem2) poem2.style.opacity = 0;
    if (fork) fork.style.opacity = 0;
    if (spoon) spoon.style.opacity = 0;
    if (knife) knife.style.opacity = 0;
    if (plate1) plate1.style.opacity = 0;
    if (plate2) plate2.style.opacity = 0;
  }

  function showPoem2Utensils() {
    if (poem2) poem2.style.opacity = 1;
    setTimeout(() => { if (fork) fork.style.opacity = 1; }, 200);
    setTimeout(() => { if (spoon) spoon.style.opacity = 1; }, 400);
    setTimeout(() => { if (knife) knife.style.opacity = 1; }, 600);
    setTimeout(() => { if (plate1) plate1.style.opacity = 1; }, 800);
    setTimeout(() => { if (plate2) plate2.style.opacity = 1; }, 1000);
  }

  function isPage4InView() {
    const rect4 = page4.getBoundingClientRect();
    return rect4.top < window.innerHeight / 2 && rect4.bottom > window.innerHeight / 2;
  }

  window.addEventListener('scroll', function() {
    if (isPage4InView()) {
      showPoem2Utensils();
    } else {
      hidePoem2Utensils();
    }
  });

  // Initial state
  hidePoem2Utensils();
});