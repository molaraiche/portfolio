const burger = document.querySelector("header .burger");
const list = document.querySelector(".list");
const closeMenu = document.querySelector(".closeMenu");

/**/
let width = 696;
if (screen.availWidth <= width) {
  burger.onclick = () => {
    list.style.transform = "translateX(0)";
    burger.style.display = "none";
    list.style.transition = "1s";
    closeMenu.style.display = "block";
  };

  closeMenu.onclick = () => {
    list.style.transform = "translateX(100%)";
    list.style.transition = "1s";
    closeMenu.style.display = "none";
    burger.style.display = "block";
  };
  console.log("done");
} else {
  console.log("not done");
}
