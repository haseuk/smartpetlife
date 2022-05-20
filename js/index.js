window.onload = function() {
  let header = document.querySelector('header');
  let menu = document.querySelector('.menu');
  menu.addEventListener('click', function() {
    if(header.classList.contains('open')) {
      header.classList.remove('open');
    } else {
      header.classList.add('open');
    }
  });
  let menuList = document.querySelectorAll('.menu-list a');
  Array.prototype.forEach.call(menuList, function(e) {
    e.addEventListener('click', function() {
      header.classList.remove('open');
    })
  });

  let privacy = document.querySelector('.privacy');
  let terms = document.querySelector('.terms');
  let popup = document.querySelector('.popup');
  let close = popup.querySelector('.popup .close');
  privacy.addEventListener('click', function() {
    popup.classList.add('p-pop');
  });
  terms.addEventListener('click', function() {
    popup.classList.add('t-pop');
  });
  close.addEventListener('click', function() {
    popup.classList.remove('p-pop', 't-pop');
  });

  var mov = document.querySelectorAll('[mov]');
  function movCheck() {
    var top = document.querySelector('.container header').offsetHeight;
    var bottom = window.innerHeight;
    var i = mov.length;
    var r;
    while(i--) {
      r = mov[i].getBoundingClientRect();
      if (r.top < bottom) mov[i].setAttribute('mov', 'in')
    }
  }
  window.addEventListener('scroll', movCheck);
  window.addEventListener('resize', movCheck);
  movCheck();
}