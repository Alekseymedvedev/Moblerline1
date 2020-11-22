"use strict"

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  centerSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    720: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1070: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
})

var swiper = new Swiper('.reviews__swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  centerSlides: true,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    620: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    970: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
})
$(function () {
  $('.popup-modal').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true,
    slidesPerView: true
  });
  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});


let menuBtn = document.querySelectorAll('.menu__btn');

menuBtn.forEach((item) => {
  item.addEventListener('click', function () {
    item.classList.toggle('menu__btn--active');
    document.querySelector('.menu').classList.toggle('menu__active');

  });
});


let img = document.querySelectorAll('.furniture__item-img');

function imgFur() {
  img.forEach((item) => {
    let img1 = item.closest('.furniture__item');
    if (item.clientWidth < 300){
      img1.classList.add('item-small');
    }else {
          img1.classList.add('item-big');
         }
    console.log(1);
  });
}

document.querySelector('.furniture__item-img').onload = imgFur;


// for (let i = 1; i <= img.length - 1; i++) {
//   let img1 = img.closest('.furniture__item');
//   if (img.clientWidth < 300) {
//     img1.classList.add('item-small');
//   } else {
//     img1.classList.add('item-big');
//   }
//   console.log(img[i].clientWidth);
//   console.log(imgWrapper);
// }