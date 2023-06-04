document.addEventListener("DOMContentLoaded", function () {
  var counter = 0;
  let images = document.querySelectorAll(".images");
  let buttons = document.querySelectorAll(".buttons");
  let textButton = document.querySelector(".text-button");

  function changeImage() {
    counter++;
    if (counter > images.length) {
      counter = 1;
    }

    images.forEach((img) => (img.style.display = "none"));
    buttons.forEach((btn) => btn.classList.remove("active"));

    images[counter - 1].style.display = "block";
    buttons[counter - 1].classList.add("active");
    setTimeout(changeImage, 3000);
  }

  changeImage();

  textButton.addEventListener("click", function () {
    console.log("hello");
    let text = document.querySelector(".text-wrapper");
    text.classList.toggle("open");
  });
});
