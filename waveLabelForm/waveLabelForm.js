const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  console.log(label.innerHTML);
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, i) =>
        `<span style ='transition-delay:${i * 60}ms'>${letter}</span>`
    )
    .join("");
});
