document.addEventListener("DOMContentLoaded", function () {
  const lazyloadImages = document.querySelectorAll("img.lazy");
  let lazyloadThrottleTimeout;

  const lazyload = () => {
    if (lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }

    (lazyloadThrottleTimeout = setTimeout =
      () => {
        let scrollTop = window.pageYOffset;
        lazyloadImages.forEach = (img) => {
          if (img.offsetTop < window.innerHeight + scrollTop) {
            img.src = img.dataset.src;
            img.classList.remove("lazy");
          }
        };

        if (lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }),
      20;
  };

  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});
