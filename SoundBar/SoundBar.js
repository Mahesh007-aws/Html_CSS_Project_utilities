const btns = document.querySelectorAll("button");

btns.forEach((btn) => btn.addEventListener("click", playsound));

function playsound() {
  let audio = new Audio(`sounds/${this.innerText}.mp3`);
  audio.play();
}
