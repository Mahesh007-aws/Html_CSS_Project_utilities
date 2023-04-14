const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const nxt = document.getElementById("nxt");
const circles = document.querySelectorAll(".circle");

let currentposition = 1;

nxt.addEventListener("click", () => {
  if (currentposition < circles.length) currentposition++;
  console.log(currentposition);
  changeposition();
  prev.disabled = false;
  //   prev.classList.remove("btn[disabled]");
  prev.classList.add("btn");
});
prev.addEventListener("click", () => {
  if (currentposition > 1) currentposition--;
  if (currentposition == 1) {
    prev.disabled = true;
    prev.classList.add("btn[disabled]");
  }
  console.log(currentposition);
  changeposition();
});
debugger;
function changeposition() {
  circles.forEach((ele) => {
    ele.classList.remove("active");
  });
  circles[currentposition - 1].classList.add("active");
  progress.style.width = `${
    ((currentposition - 1) / (circles.length - 1)) * 100
  }%`;
  //   console.log(((currentposition - 1) / (circles.length - 1)) * 100);
}
