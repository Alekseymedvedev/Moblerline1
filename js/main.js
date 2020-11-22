"use strict"
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}
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





const cooperationBtn = document.querySelector('.cooperation__btn');
const cooperationInp = document.querySelector('.cooperation__form-checkbox');

function btn1() {
  
  if (cooperationInp.checked) {
    cooperationBtn.classList.remove('form__btn--off');
  } else {
    cooperationBtn.classList.add('form__btn--off');
  }

}
document.querySelector('.cooperation__label').onclick = btn1;



const formBottomnBtn = document.querySelector('.form-bottom__btn1');
const formBottomInp = document.querySelector('.form-bottom__checkbox1');

function btn2() {
  
  if (formBottomInp.checked) {
    formBottomnBtn.classList.remove('form__btn--off');
  } else {
    formBottomnBtn.classList.add('form__btn--off');
  }
console.log(1);
}
document.querySelector('.form-bottom__label1').onclick = btn2;



const modalBtn = document.querySelector('.modal__btn');
const modalInp = document.querySelector('.modal__inp');

function btn3() {

  if (modalInp.checked) {
    modalBtn.classList.remove('form__btn--off');
  } else {
    modalBtn.classList.add('form__btn--off');
  }
}
document.querySelector('.modal__label').onclick = btn3;



let img = document.querySelectorAll('.furniture__item-img');
const imgs = document.querySelectorAll('img')


function checkImages2() {
  let counter = 0;
 
  
}

setTimeout(checkImages2, 0);

window.onload=function(){
  function checkImage() {
    console.log('2=>', ++counter);
    imgs.forEach(img => {
      
      img.addEventListener('load', (e) => {
        const img = e.target
      
        if (img.width > 300) {
          img.parentNode.classList.add('item-big')
        } else {
          img.classList.add('item-small')
        }
      })
    })
  }
}
function checkImages2() {
  let counter = 0;

  function checkImage() {
    console.log('2=>', ++counter);
    imgs.forEach(img => {
      
      img.addEventListener('load', (e) => {
        const img = e.target
      
        if (img.width > 300) {
          img.parentNode.classList.add('item-big')
        } else {
          img.classList.add('item-small')
        }
      })
    })
  }
  document.querySelectorAll('.img').forEach(img => img.complete ? checkImage() : img.addEventListener('load', checkImage));
}