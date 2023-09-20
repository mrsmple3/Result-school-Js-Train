function slidesPlagin(activeSlide = 0) {
  const slides = document.querySelectorAll(".slide");
  const body = document.getElementsByTagName("body")[0];

  slides[activeSlide].classList.add("active");

  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveClasses();
      slide.classList.add("active");

      // Здесь вы можете установить цвет фона для body
      // Например, если вы хотите установить цвет фона на красный при нажатии на первый слайд:
      if (slide === slides[0]) {
        body.style.backgroundColor = "#1f2722";
      }
      if (slide === slides[1]) {
        body.style.backgroundColor = "#447a7a";
      }
      if (slide === slides[2]) {
        body.style.backgroundColor = "#102b44";
      }
      if (slide === slides[3]) {
        body.style.backgroundColor = "#00343d";
      }
      if (slide === slides[4]) {
        body.style.backgroundColor = "#3d0030";
      }
      // Добавьте здесь другие условия для других слайдов
    });
  }

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
}

slidesPlagin(3);
