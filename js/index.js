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
    slide.style.marginLeft = "50rem";
  }
};

prevButton.addEventListener("click", scrollLeftHandler);

//slider-section




const paginationNumbers = document.querySelector(".paginationNumbers");
const listContainer = document.querySelector("#list-container");
const listItems = listContainer.querySelectorAll("li");
const paginationLimit = 3;
const paginationContainer = document.querySelector(".paginationContainer");
const prevPage = paginationContainer.querySelector(".fa-chevron-left");
const nextPage = paginationContainer.querySelector(".fa-chevron-right");

const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage = 1;

const appendPageNumber = (index) => {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);

  paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
};

const handleActivePageNumber = () => {
  document.querySelectorAll(".pagination-number").forEach((button) => {
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      button.classList.add("active");
    }
  });
};

const setCurrentPage = (pageNum) => {
  currentPage = pageNum;
  handleActivePageNumber();

  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;

  listItems.forEach((item, index) => {
    item.classList.add("hidden");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("hidden");
    }
  });
};

window.addEventListener("load", () => {
  getPaginationNumbers();
  setCurrentPage(1);
  prevPage.addEventListener("click", () => {
    if (currentPage == "1") {
      return;
    }
    setCurrentPage(currentPage - 1);
  });
  nextPage.addEventListener("click", () => {
    if (currentPage == pageCount) {
      return;
    }
    setCurrentPage(currentPage + 1);
  });
  document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }
  });
});
//pagination of products





const toggleOffBtn = document.querySelector(".toggleOffBtn");
let element = document.body;
   
toggleOffBtn.addEventListener("click", () => {
  if (toggleOffBtn.classList.contains("fa-toggle-off")) {
    toggleOffBtn.classList.remove("fa-toggle-off");
    toggleOffBtn.classList.add("fa-toggle-on");
    element.classList.add("darkTheme");
  } else {
    toggleOffBtn.classList.remove("fa-toggle-on");
    toggleOffBtn.classList.add("fa-toggle-off");
    element.classList.remove("darkTheme");
  }
});
//switchBtn for changing theme
