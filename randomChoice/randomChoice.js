const choices = document.getElementById("choices");
const tags = document.getElementsByClassName("tags")[0];
const btn = document.querySelector("button");
var spans;

choices.addEventListener("keydown", (e) => {
  const allchoices = e.target.value.split(" ").filter((tag) => tag);
  spans = allchoices.map((choice) => `<span> ${choice}</span>`);
  //   console.log(spans);

  tags.innerHTML = spans.join(" ");
});

btn.addEventListener("click", () => {
  document.querySelectorAll("span").forEach((item) => {
    // setTimeout(() => {
    //   item.classList.add("active");
    //   //   item.classList.remove("active");
    // }, 100);
    // setTimeout(() => {
    //   // item.classList.add("active");
    //   item.classList.remove("active");
    // }, 100);
    item.classList.remove("active");
  });
  let ran = Math.floor(Math.random() * spans.length);
  let t = document.querySelectorAll("span")[ran].classList.add("active");
  console.log();
});
