var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nb").style.top = "0";
  } else {
    document.getElementById("nb").style.top = "-110px";
  }
  prevScrollpos = currentScrollPos;
}