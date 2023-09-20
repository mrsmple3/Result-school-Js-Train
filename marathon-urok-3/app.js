const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const container = document.querySelector(".container");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const slideCount = mainSlide.querySelectorAll("div").length;
const slideWidth = mainSlide.querySelector("div").style.width;
const heightSlide = container.clientHeight;
let activeSlideIndex = 0;

sidebar.style.top = `-${(slideCount - 1) * 100}vh`;

upBtn.addEventListener("click", () => {
  changeSlide("up");
});

downBtn.addEventListener("click", () => {
  changeSlide("down");
});

function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === slideCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slideCount - 1;
    }
  }

  mainSlide.style.transform = `translateY(-${
    activeSlideIndex * heightSlide
  }px)`;

  sidebar.style.transform = `translateY(${activeSlideIndex * heightSlide}px)`;
}
