"use strict";

var menuOutline = document.querySelector(".menu-outline");
var closeOutline = document.querySelector(".close-outline");
var mainNav = document.querySelector(".main-nav");
menuOutline.addEventListener("click", function () {
  mainNav.style.opacity = "1";
  mainNav.style.transform = "translatex(0)";
  mainNav.style.visibility = "visible";
  mainNav.style.pointerEvents = "initial";
  menuOutline.style.display = "none";
  closeOutline.style.display = "block";
});
closeOutline.addEventListener("click", function () {
  mainNav.style.opacity = "0";
  mainNav.style.transform = "translatex(100%)";
  mainNav.style.visibility = "hidden";
  mainNav.style.pointerEvents = "none";
  closeOutline.style.display = "none";
  menuOutline.style.display = "block";
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && closeOutline.style.display === "block") {
    mainNav.style.opacity = "0";
    mainNav.style.transform = "translatex(100%)";
    mainNav.style.visibility = "hidden";
    mainNav.style.pointerEvents = "none";
    closeOutline.style.display = "none";
    menuOutline.style.display = "block";
  }
});