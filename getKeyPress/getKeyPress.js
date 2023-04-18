const keys = document.querySelectorAll(".key");
const txt = document.querySelector("div strong");
window.addEventListener("keypress", (e) => {
  keys[0].innerText = `${e.key}`;
  keys[1].innerText = e.charCode;
  keys[2].innerText = e.code;
  console.log(e);
});
