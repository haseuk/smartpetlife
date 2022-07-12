let header = document.querySelector('header');
let menu = document.querySelector('.menu');
let dim = document.querySelector('.dim');
menu.addEventListener('click', function () {
  if (header.classList.contains('open')) {
    header.classList.remove('open');
  } else {
    header.classList.add('open');
  }
});
dim.addEventListener('click', function() {
  header.classList.remove('open');
})