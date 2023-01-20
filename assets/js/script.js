
// Mobile menu
var nav = document.getElementById("nav");
var mobileMenu = document.getElementById("mobile-menu");
var navItems = document.getElementById("nav-items");
var menuItem = document.querySelectorAll("#menu-item")

mobileMenu.addEventListener("click", function() {
  navItems.classList.toggle("active");
  nav.classList.toggle("active");
})

for(let i = 0; i < menuItem.length; i++) {
    console.log(i);
    menuItem[i].addEventListener("click", function() {
        nav.classList.remove("active");
        navItems.classList.remove("active");
    })    
}