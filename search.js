document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.querySelector('.search-btn');
  const searchInput = document.querySelector('.search-input');

  searchBtn.addEventListener('click', () => {
    searchInput.classList.toggle('hidden');
  });
});
