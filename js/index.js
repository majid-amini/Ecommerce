const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.querySelector(".fa-chevron-left");
const nextButton = document.querySelector(".fa-chevron-right");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

const scrollLeftHandler = () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
  if (slidesContainer.scrollLeft == "0") {
    slide.style.marginLeft = '50rem';
  }
};

prevButton.addEventListener("click", scrollLeftHandler);
