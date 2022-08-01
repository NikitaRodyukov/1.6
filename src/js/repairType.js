// breakpoint where swiper will be destroyed
// and switches to a dual-column layout
const breakpointTablet = window.matchMedia("(min-width:768px)");
// keep track of swiper instances to destroy later
let mySwiper;
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
const breakpointChecker = function () {
  // if larger viewport and multi-row layout needed
  if (breakpointTablet.matches) {
    // clean up old instances and inline styles when available
    if (mySwiper !== undefined) mySwiper.destroy(true, true);
    // or/and do nothing
    return;
    // else if a small viewport and single column layout needed
  } else if (!breakpointTablet.matches) {
    // fire small viewport version of swiper
    return enableSwiper();
  }
};
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
const enableSwiper = function () {
  mySwiper = new Swiper(".repair-type__items", {
    slidesPerView: "auto",

    spaceBetween: 16,
    keyboardControl: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// keep an eye on viewport size changes
breakpointTablet.addListener(breakpointChecker);
// kickstart
breakpointChecker();

const repairBlock = document.querySelector(".repair-type");
const blockItems = repairBlock.querySelector(".repair-items__wrapper");
const expand = repairBlock.querySelector(".repair-type__expand");
const expandIcon = expand.querySelector(".repair-type__expand__icon");
const brands = repairBlock.querySelectorAll(".repair-items__block");
const expandText = expand.querySelector(".repair-type__expand__text");

const breakpointDesktop = window.matchMedia("(min-width:1120px)");

if (breakpointDesktop.matches) {
  for (let i = 0; i < 4; i++) {
    brands[i].classList.add("repair-items__block--show");
  }
} else if (breakpointTablet.matches) {
  for (let i = 0; i < 3; i++) {
    brands[i].classList.add("repair-items__block--show");
  }
}

expand.addEventListener("click", function () {
  if (expand.classList.contains("repair-type__expand--false")) {
    if (breakpointDesktop.matches) {
      for (let i = 4; i < brands.length; i++) {
        brands[i].classList.add("repair-items__block--show");
      }
    } else if (breakpointTablet.matches) {
      for (let i = 3; i < brands.length; i++) {
        brands[i].classList.add("repair-items__block--show");
      }
    }

    expand.classList.remove("repair-type__expand--false");
    expand.classList.add("repair-type__expand--expanded");
    blockItems.classList.add("repair-items__wrapper--expanded");
    expandIcon.classList.add("repair-type__expand__icon--rotated");
    expandText.innerHTML = "Скрыть";
  } else if (expand.classList.contains("repair-type__expand--expanded")) {
    repairBlock.classList.remove("repair-type__expand--expanded");
    expand.classList.add("repair-type__expand--false");
    blockItems.classList.remove("repair-items__wrapper--expanded");
    expandText.innerHTML = "Показать все";
    expandIcon.classList.remove("repair-type__expand__icon--rotated");

    setTimeout(closeItems, 940);
  }
});

let closeItems = function () {
  if (breakpointDesktop.matches) {
    for (let i = 4; i < brands.length; i++) {
      brands[i].classList.remove("repair-items__block--show");
    }
  } else if (breakpointTablet.matches) {
    for (let i = 3; i < brands.length; i++) {
      brands[i].classList.remove("repair-items__block--show");
    }
  }
};
