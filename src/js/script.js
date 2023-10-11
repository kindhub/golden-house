import VSwiper from "./modules/VSwiper";
import Anchor from "./modules/Anchor";
import Nav from "./modules/Nav";
import Countup from "./custom_modules/Countup";
import VacancyBtn from "./modules/VacancyBtn";

/*
	--------------------------------------------
	--------------------------------------------
					SLIDERS
	--------------------------------------------
	--------------------------------------------
 */
function initCardSlider() {
  swiper.init(".tmpl-hh__slider-card__wrapper", {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    autoHeight: true,
    navigation: {
      prevEl: ".tmpl-hh__slider-card__arrow-prev",
      nextEl: ".tmpl-hh__slider-card__arrow-next",
    },
    breakpoints: {
      1339: {
        spaceBetween: 30,
      },
      529: {
        spaceBetween: 15,
      },
    },
  });
}
/*
	--------------------------------------------
	--------------------------------------------
						COMMON
	--------------------------------------------
	--------------------------------------------
 */

const scrollElements = document.querySelectorAll(".tmpl-hh__s-stats");
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      new Countup(".tmpl-hh__s-stats");
    }
  });
};

if (window.innerWidth < 529) {
  new Countup(".tmpl-hh__s-stats");
} else {
  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });
}

const swiper = new VSwiper();
new Nav();
new VacancyBtn();
new Anchor();

initCardSlider();
