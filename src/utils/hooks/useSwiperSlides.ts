export const slidePrev = () => {
  // @ts-ignore
  const swiper = document.querySelector(".swiper")?.swiper;
  swiper.slidePrev();
};

export const slideNext = () => {
  // @ts-ignore
  const swiper = document.querySelector(".swiper")?.swiper;
  swiper.slideNext();
};
