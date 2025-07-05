document.addEventListener("DOMContentLoaded", function () {
  const languageSelected = document.querySelector('.language');
  const languageOptions = document.querySelector('.language-options');

  languageSelected.addEventListener('click', () => {
    languageOptions.classList.toggle('visible');
    languageOptions.classList.toggle('hidden');
  });

  document.addEventListener('click', (e) => {
    if (!languageSelected.contains(e.target) && !languageOptions.contains(e.target)) {
      languageOptions.classList.remove('visible');
      languageOptions.classList.add('hidden');
    }
  });
});
