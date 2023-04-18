const btns = document.querySelectorAll("button");

btns.forEach((btn) => btn.addEventListener("click", playsound));

let text = "applause";
let prev;
function playsound() {
  pausesound();
  setTimeout(() => {
    let audio = new Audio(`sounds/${this.innerText}.mp3`);
    audio.play();
  }, 500);
}

function pausesound() {
  btns.forEach((btn) => {
    console.log(btn, "paused");
    let audio = new Audio(`sounds/${btn.innerText}.mp3`);
    audio.pause();
    audio.currentTime = 0;
  });
}
