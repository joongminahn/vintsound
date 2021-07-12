const fadeEls = document.querySelectorAll('.fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.8,
    opacity: 1
  });
  
});