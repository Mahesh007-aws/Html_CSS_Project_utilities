const config = {
  headers: {
    Accept: "applictation/json",
  },
};
document.querySelector("button").addEventListener("click", () => {
//   let joke;
//   fetch("https://icanhazdadjoke.com/slack", config)
//     .then((data) => data.json())
//     .then((res) => {
//       joke = res.attachments[0].text;
//     });
  //   console.log();
  generateJoke();
});

async function generateJoke() {
  const config = {
    headers: {
      Accept: "applictation/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com/slack", config);

  const data = await res.json();
  document.querySelector("q").innerText = data.attachments[0].text;
}
