
var slideIndex = 0;
var slideIndex_1 = 0;
var slideIndex_2 = 0;
carousel();
carousel_1();
carousel_2();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 5000); 
}

//alumni and parents slideshow
function carousel_1() {
    var i;
    var x = document.getElementsByClassName("slides_1");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex_1++;
    if (slideIndex_1 > x.length) {slideIndex_1 = 1} 
    x[slideIndex_1-1].style.display = "block"; 
    setTimeout(carousel_1, 5000); 
}

function carousel_2() {
     var i;
    var x = document.getElementsByClassName("slides_2");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex_2++;
    if (slideIndex_2 > x.length) {slideIndex_2 = 1} 
    x[slideIndex_2-1].style.display = "block"; 
    setTimeout(carousel_2, 5000); 
}

//select element function
const selectElement  = function(element){
    return document.querySelector(element);
};

let menuToggler= selectElement('.menu-toggle');
let body= selectElement('body');

menuToggler.addEventListener('click', function(){
    body.classList.toggle('open');
});

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//menu toggler






