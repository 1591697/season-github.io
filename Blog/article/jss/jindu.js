window.addEventListener('scroll', updateProgressBar);
function updateProgressBar() {

var windowHeight = window.innerHeight;
  var pageHeight = document.body.scrollHeight;
  var scrollPosition = window.scrollY;
  var progress = (scrollPosition / (pageHeight - windowHeight)) * 100;
var jindu=document.querySelector('.jindu')
jindu.innerHTML=`已近阅读 ${progress.toFixed(0)}%`
}