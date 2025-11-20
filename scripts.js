// scripts.js
// Animate cards and skill progress when they enter the viewport
(function(){
  function onEntry(entries, obs){
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        // if it's a skill-fill with data-pct, set width from css var
        const fills = entry.target.querySelectorAll && entry.target.querySelectorAll('.skill-fill');
        fills && fills.forEach(f => {
          const pct = getComputedStyle(f).getPropertyValue('--pct') || f.dataset.pct;
          // ensure pct ends with %
          if(pct) f.style.width = pct.trim();
        });
      }
    });
  }

  const observer = new IntersectionObserver(onEntry, {threshold: 0.25});

  // observe cards (both skill and contact cards)
  document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.skill-card, .contact-card, .project-card, .project-card-alt');
    cards.forEach(c => { observer.observe(c); });

    // if skills exist, also observe the fill elements individually
    const fills = document.querySelectorAll('.skill-fill');
    fills.forEach(f => {
      // set initial width 0 to enable animation
      f.style.width = '0%';
      // the CSS var --pct remains as the target width
      const parent = f.closest('.skill-card') || f.parentElement;
      if(parent) observer.observe(parent);
    });
  });
})();
