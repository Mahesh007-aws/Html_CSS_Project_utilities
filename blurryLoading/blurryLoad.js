const loadingTxt = document.querySelector(".loading-txt");
const bg = document.querySelector(".bg");

let loadCount = 0;

let interval = setInterval(() => {
  loadCount++;
  if (loadCount > 99) {
    clearInterval(interval);
  }
  loadingTxt.innerHTML = `${loadCount}%`;
  loadingTxt.style.opacity = `${1 - loadCount / 100}`;

  bg.style.filter = `blur(${40 - loadCount / 2}px)`;
}, 50);
