
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