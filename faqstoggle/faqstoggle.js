const expandbtn = document.querySelectorAll("button i.fa-chevron-down");
const closebtn = document.querySelectorAll("button i.fa-times");
const text = document.querySelectorAll(".faq_active .faq_text");

expandbtn.forEach((ele, i) => {
  ele.addEventListener("click", function () {
    text[i].style.display = "block";
    this.style.display = "none";
    closebtn[i].style.display = "block";
  });
});
closebtn.forEach((ele, i) => {
  ele.addEventListener("click", function () {
    text[i].style.display = "none";
    this.style.display = "none";
    expandbtn[i].style.display = "block";
  });
});
