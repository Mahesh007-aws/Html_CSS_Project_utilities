const container = document.getElementsByClassName("container")[0];
const circle = document.getElementsByClassName("circle")[0];
const open = document.getElementById("open");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  container.classList.add("show-nav");
  circle.style.transform = "rotate(-70deg)";
});

close.addEventListener("click", () => {
  container.classList.remove("show-nav");
  circle.style.transform = "rotate(-2deg)";
});
