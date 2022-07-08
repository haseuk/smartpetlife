let header = document.querySelector('header');
let menu = document.querySelector('.menu');
menu.addEventListener('click', function () {
  if (header.classList.contains('open')) {
    header.classList.remove('open');
  } else {
    header.classList.add('open');
  }
});