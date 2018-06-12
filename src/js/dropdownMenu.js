document.getElementById("dropdown").addEventListener("click", openDropdownMenu);

function openDropdownMenu() {
  for(let i = 0; i < document.getElementsByClassName("dropdown-content-list").length; i++) {
    document.getElementsByClassName("dropdown-content-list")[i].classList.toggle("open");
  }
}