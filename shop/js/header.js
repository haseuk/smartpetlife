let header = document.querySelector('header');
let menu = document.querySelector('.menu');
let dim = document.querySelector('.dim');
let body = document.querySelector('body');
menu.addEventListener('click', function () {
  if (header.classList.contains('open')) {
    header.classList.remove('open');
    body.style.overflow = '';
  } else {
    header.classList.add('open');
    body.style.overflow = 'hidden';
  }
});
dim.addEventListener('click', function() {
  header.classList.remove('open');
  body.style.overflow = '';
})