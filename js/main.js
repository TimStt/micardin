function main() {
  const sliderRender = () => {
    const swiper = new Swiper(".swiper", {
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 24,
      watchOverflow: true,
      updateOnWindowResize: true,

      //   breakpoints: {
      //     500: {
      //       slidesPerView: "auto",
      //     },
      //     1000: {
      //       slidesPerView: 2,
      //     },

      //     1400: {
      //       slidesPerView: 2,
      //     },
      //   },
    });

    const paginationRender = () => {
      const paginationItems = document.querySelectorAll(
        ".feedback__slider__bullet"
      ); // находим элементы пагинации

      swiper.on("slideChange", function () {
        paginationItems.forEach(function (item, index) {
          index === swiper.realIndex
            ? item.classList.add("is-active")
            : item.classList.remove("is-active");
        });
      });

      const paginationHandlerClick = () => {
        paginationItems.forEach(function (item, index) {
          item.addEventListener("click", function () {
            swiper.slideTo(index);
          });
        });
      };
      paginationHandlerClick();
    };

    paginationRender();
  };

  sliderRender();
}
main();
