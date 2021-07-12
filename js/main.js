const fadeEls = document.querySelectorAll('.fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index + 0.4) * 1.2,
    opacity: 1
  });
  
});