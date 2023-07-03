document.querySelector(".ri-menu-line").addEventListener("click", function () {
  document.querySelector("nav ul").style.right = 0;
});

document
  .querySelector(".ri-close-circle-line")
  .addEventListener("click", function () {
    document.querySelector("nav ul").style.right = "-200px";
  });
