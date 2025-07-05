document.addEventListener("DOMContentLoaded", function() {
  const newsItems = document.querySelector('.news-items');
  const allCards = Array.from(newsItems.children);
  const dots = document.querySelectorAll('.dot');
  const nextArrow = document.querySelector('.next-arrow');
  const itemsPerPage = 3;
  let currentPage = 0;

  const totalPages = Math.ceil(allCards.length / itemsPerPage);

  function showPage(index, direction = 'right') {
    const transitionDuration = 300; // matches CSS

    const start = index * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = allCards.slice(start, end);

    // Animate current visible cards out
    const currentCards = Array.from(newsItems.querySelectorAll('.news-card.active'));
    currentCards.forEach(card => {
      card.classList.remove('slide-in-left', 'slide-in-right', 'active');
      card.classList.add(direction === 'right' ? 'slide-out-left' : 'slide-out-right');
    });

    setTimeout(() => {
      // Hide current cards after slide-out
      currentCards.forEach(card => {
        card.classList.remove('slide-out-left', 'slide-out-right');
        card.style.display = 'none';
      });

      // Show new page items with slide-in
      pageItems.forEach(item => {
        item.style.display = 'block';
        item.classList.remove('slide-out-left', 'slide-out-right', 'slide-in-left', 'slide-in-right', 'active');
        item.classList.add(direction === 'right' ? 'slide-in-right' : 'slide-in-left');
        // Force reflow
        void item.offsetWidth;
        item.classList.add('active');
      });

      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
      currentPage = index;
    }, transitionDuration);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const pageIndex = parseInt(dot.dataset.page);
      if (pageIndex === currentPage) return;
      const direction = pageIndex > currentPage ? 'right' : 'left';
      showPage(pageIndex, direction);
    });
  });

  nextArrow.addEventListener('click', () => {
    const next = (currentPage + 1) % totalPages;
    showPage(next, 'right');
  });

  // Initialize first page
  showPage(0);
});
