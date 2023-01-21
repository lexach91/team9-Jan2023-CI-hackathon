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