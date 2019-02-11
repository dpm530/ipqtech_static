
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("header_navbar").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else {
    document.getElementById("header_navbar").style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
}
