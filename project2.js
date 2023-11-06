var BtnOne = document.querySelector(".Btn_1");
var labeltext = document.querySelector('#labeltext');

BtnOne.addEventListener("click", () => {
  BtnOne.classList.toggle("active");

});

const navli = document.querySelectorAll("nav ul li a ");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  var current = "";
  sections.forEach((section) => {
    let sectiontop = section.offsetTop(70);
    if (scrollY >= sectiontop(70)) {
      current = section.getAttribute("id");
    }
  });

  navli.forEach((a) => {
    a.classList.remove("active");
    document
      .querySelector("nav ul li a[href*=" + current + "]")
      .classList.add("active");
  });
});