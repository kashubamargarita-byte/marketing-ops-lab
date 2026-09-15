
(function(){
  const chips = document.querySelectorAll('.chip');
  const cards = document.querySelectorAll('.card');
  const search = document.getElementById('searchInput');
  const countLine = document.getElementById('countLine');
  let activeCat = 'all';

  function applyFilter(){
    const q = (search.value || '').toLowerCase().trim();
    let shown = 0;
    cards.forEach(c => {
      const matchesCat = activeCat === 'all' || c.dataset.category === activeCat;
      const matchesQ = !q || c.dataset.name.includes(q);
      const visible = matchesCat && matchesQ;
      c.hidden = !visible;
      if (visible) shown++;
    });
    if (countLine) countLine.textContent = 'Showing ' + shown + ' of ' + cards.length + ' tools';
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCat = chip.dataset.cat;
      applyFilter();
    });
  });

  if (search) search.addEventListener('input', applyFilter);
})();
