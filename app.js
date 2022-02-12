let hamburger = document.querySelector(".hamburgur");
let close = document.querySelector(".close");
let menu = document.querySelector(".menu_layout");
let arrowDownFirst = document.querySelector("#arrow_down_1");
let arrowDownSecond = document.querySelector("#arrow_down_2");
let arrowDownThird = document.querySelector("#arrow_down_3");
let menuHeadings = document.querySelectorAll(".menu_heading");
let productsMenuHeading = document.getElementById("productsMenuHeading");
let companyMenuHeading = document.getElementById("companyMenuHeading");
let connectMenuHeading = document.getElementById("connectMenuHeading");
let productsSubMenu = document.getElementById("productsSubMenu");
let companySubMenu = document.getElementById("companySubMenu");
let connectSubMenu = document.getElementById("connectSubMenu");

hamburger.addEventListener("click", () => {
  hamburger.style.display = "none";
  close.style.display = "flex";
  menu.classList.add("menu_style");
});

close.addEventListener("click", () => {
  close.style.display = "none";
  hamburger.style.display = "flex";
  menu.classList.remove("menu_style");
});
