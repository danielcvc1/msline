// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}



//////////////////////////////////  https://www.w3schools.com/howto/howto_js_popup.asp
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}