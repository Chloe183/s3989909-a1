document.addEventListener('DOMContentLoaded', function() {
  const footprint1 = document.getElementById('footprint1');
  const footprint2 = document.getElementById('footprint2');
  const poem1 = document.getElementById('poem1');
  const page3 = document.querySelector('.page3');

  function resetPage3() {
    if (footprint1) footprint1.style.opacity = 0;
    if (footprint2) footprint2.style.opacity = 0;
    if (poem1) poem1.style.opacity = 0;
  }

  function animatePage3() {
    if (footprint1) footprint1.style.opacity = 1;
    setTimeout(() => {
      if (footprint2) footprint2.style.opacity = 1;
      setTimeout(() => {
        if (poem1) poem1.style.opacity = 1;
      }, 700);
    }, 700);
  }

  window.addEventListener('scroll', function() {
    const rect3 = page3.getBoundingClientRect();
    // If page 3 is in view (at least halfway)
    if (rect3.top < window.innerHeight / 2 && rect3.bottom > window.innerHeight / 2) {
      // Only animate if not already visible
      if (footprint1.style.opacity === "" || footprint1.style.opacity === "0") {
        resetPage3();
        animatePage3();
      }
    } else {
      resetPage3();
    }
  });

  // Initial state
  resetPage3();
});