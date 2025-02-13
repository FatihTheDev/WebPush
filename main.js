let menu_toggle = document.querySelector("#hamburger-menu");
let container = document.querySelector(".main-part");
let overlay = document.querySelector("#overlay");

console.log(menu_toggle)
console.log(overlay)

menu_toggle.addEventListener('click', () => {

  if (overlay.style.display == "none") {
    overlay.style.display = "block";
    container.style.display = "none";
    menu_toggle.classList.remove("fa-bars");
    menu_toggle.classList.add("fa-x");
    menu_toggle.classList.remove("hover:text-purple-600");
    menu_toggle.classList.add("hover:text-red-300");
  }
  else {
    overlay.style.display = "none";
    container.style.display = "block";
    menu_toggle.classList.remove("fa-x");
    menu_toggle.classList.add("fa-bars");
    menu_toggle.classList.remove("hover:text-red-300");
    menu_toggle.classList.add("hover:text-purple-600");
  }

})

