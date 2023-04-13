const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeactive(panel);
    panel.classList.add("active");
  });
});

const removeactive = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
