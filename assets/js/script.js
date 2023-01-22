

// Nav variables
var nav = document.getElementById("nav");
var navItems = document.getElementById("nav-items");
var mobileMenu = document.getElementById("mobile-menu");
var menuItem = document.querySelectorAll(".menu-item");

// Toggle menu
mobileMenu.addEventListener("click", function() {
  navItems.classList.toggle("active");
  nav.classList.toggle("active");
})

// Close menu on item click
for(let i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener("click", function() {
    nav.classList.remove("active");
    navItems.classList.remove("active");
  })    
}

// Carousel banner
var circleIndex = 0;
var slideIndex = 0;

// Function to loop through carousel slides
function showCarousel() {
  var slides = document.getElementsByClassName("slides");
  var circles = document.getElementsByClassName("circle");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // hide slides
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex-1].style.display = "block"; // show slide
  setTimeout(showCarousel, 3000); // 3 seconds scroll
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" active", "");
  }
  circles[slideIndex-1].className += " active";
}

showCarousel();

let copywright = document.getElementById("copywright");
let year = new Date().getFullYear();
const modal = document.getElementById("myModal");
// button that opens the modal
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

// open the modal on button click
btn.onclick = function() {
  modal.style.display = "block";
}

// close the modal when clicking the X
span.onclick = function() {
  modal.style.display = "none";
}

// close the modal if user clicks anywhere outside the modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

copywright.innerHTML=(year)

// typewriter effect
const txtElement = document.querySelector("#txt-rotate");
const cursorElement = document.querySelector("#cursor");
const words = JSON.parse(txtElement.getAttribute("data-rotate"));
const period = txtElement.getAttribute("data-period");
let txt = "";
let wordIndex = 0;
let isDeleting = false;
let isEnd = false;
const typeWriter = () => {
  const fullTxt = words[wordIndex];

  if (isDeleting) {
    txt = fullTxt.substring(0, txt.length - 1);
  } else {
    txt = fullTxt.substring(0, txt.length + 1);
  }

  txtElement.innerHTML = `<span class="txt">${txt}</span>`;

  let typeSpeed = 100;

  if (isDeleting) {
    typeSpeed /= 2;
  }

  if (!isDeleting && txt === fullTxt) {
    typeSpeed = period;
    isDeleting = true;
  } else if (isDeleting && txt === "") {
    isDeleting = false;
    wordIndex++;
    if (wordIndex === words.length) {
      wordIndex = 0;
    }
  }

  setTimeout(typeWriter, typeSpeed);
};

window.addEventListener("load", typeWriter);