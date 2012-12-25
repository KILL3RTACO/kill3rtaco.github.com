var sticky = document.querySelector('#info-page-sidebar');
var origOffsetY = sticky.offsetTop;

function onScroll(e) {
  window.scrollY >= origOffsetY ? sticky.classList.add('fixed') : sticky.classList.remove('fixed');
}

document.addEventListener('scroll', onScroll);