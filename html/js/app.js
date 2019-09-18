
document.addEventListener('DOMContentLoaded', function () {

  let swiper = new Swiper('.swiper-wrapper', {
    loop: true,
    slidesPerView: 3,
    autoplay: {
      delay: 5000,
    },
    // effect: 'cube',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      960: {
        slidesPerView: 2,
        // 何枚スライドを見せるか決められる。
        spaceBetween: 0
        // デザインの具合によって入れる。入れなくもいい。
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  });
}, false);

// $(document).ready(function () {
//   //initialize swiper when document ready
//   var mySwiper = new Swiper('.swiper-container', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true
//   })
// });
