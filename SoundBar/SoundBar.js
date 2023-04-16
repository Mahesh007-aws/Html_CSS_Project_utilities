const btns = document.querySelectorAll("button");

btns.forEach((btn) => btn.addEventListener("click", playsound));

let text = "applause";
let prev;
function playsound() {
  let audio = new Audio(`sounds/${this.innerText}.mp3`);
  if (text != this.innerText) {
    prev.pause();
    console.log(prev, text);
    text = this.innerText;
    prev = audio;
    prev.currentTime = 0;
  }
  prev = audio;
  audio.play();
}
