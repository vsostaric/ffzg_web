document.addEventListener("DOMContentLoaded", function () {
  const newsItems = document.querySelector('.news-items');
  const allCards = Array.from(newsItems.children);
  const dots = document.querySelectorAll('.dot');
  const nextArrow = document.querySelector('.next-arrow');
  const previousArrow = document.querySelector('.previous-arrow');
  const itemsPerPage = 3;
  let currentPage = 0;

  const totalPages = Math.ceil(allCards.length / itemsPerPage);

  const heading = document.querySelector('h2');
  const headingImage = document.querySelector('h2 + img');

  function updateHeader(pageIndex) {
    if (pageIndex === 0 || pageIndex === 3) {
      heading.textContent = 'VIJESTI';
      headingImage.src = 'images/vijestiLogo.svg';
      headingImage.alt = 'Logo';
    } else if (pageIndex === 1) {
      heading.textContent = 'AKTIVNOSTI';
      headingImage.src = 'images/aktivnosti.svg';
      headingImage.alt = 'Logo';
    } else if (pageIndex === 2) {
      heading.textContent = 'NATJEČAJI';
      headingImage.src = 'images/natjecaji.svg';
      headingImage.alt = 'Logo';
    }
  }

  function updateArrows(pageIndex) {
    previousArrow.classList.toggle('hidden', pageIndex === 0);
    nextArrow.classList.toggle('hidden', pageIndex === totalPages - 1);
  }

  function showPage(index, direction = 'right') {
    const transitionDuration = 300;

    const start = index * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = allCards.slice(start, end);

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

      pageItems.forEach(item => {
        item.style.display = 'block';
        item.classList.remove('slide-out-left', 'slide-out-right', 'slide-in-left', 'slide-in-right', 'active');
        item.classList.add(direction === 'right' ? 'slide-in-right' : 'slide-in-left');
        void item.offsetWidth;
        item.classList.add('active');
      });

      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });

      updateHeader(index);
      updateArrows(index);

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

  previousArrow.addEventListener('click', () => {
    const prev = (currentPage - 1 + totalPages) % totalPages;
    showPage(prev, 'left');
  });

  showPage(0);
});
