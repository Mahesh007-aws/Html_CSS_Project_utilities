const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxPositions);

checkBoxPositions();

function checkBoxPositions() {
  const triggerpoint = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    const boxTopPlace = box.getBoundingClientRect().top;

    if (boxTopPlace < triggerpoint) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
