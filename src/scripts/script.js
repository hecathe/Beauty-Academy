/*Удалить при навешивании*/
if (document.title == 'Главная' || document.title == 'Карта сайта') {
  document.querySelector('.breadcrumbs').style.display = 'none';
}
/*Удалить при навешивании Конец*/


/*Баннер на главной*/
document.querySelectorAll('.slider-banner').forEach(item => {
  new Swiper(item, {
    slidesPerView: '1',
    loop: true,
    speed: 300,
    effect: 'fade',
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });
});
/*Баннер на главной Конец*/


/*Слайдер с 4  элементами*/
document.querySelectorAll('.slider4 .cards-items').forEach(item => {
  new Swiper(item, {
    slidesPerView: '4',
    loop: true,
    speed: 600,
    spaceBetween: 24,
    navigation: {
      nextEl: item.parentNode.querySelector('.swiper-button-next'),
      prevEl: item.parentNode.querySelector('.swiper-button-prev'),
    }
  });
});
/*Слайдер с 4  элементами Конец*/


/*Сертификаты модальное окно*/
document.querySelectorAll('.lightgallery').forEach(item => {
  lightGallery(item);
})
/*Сертификаты модальное окно Конец*/


/*Сертификаты слайдер*/
document.querySelectorAll('.certificates-slider').forEach(item => {
  new Swiper(item, {
    slidesPerView: 'auto',
    loop: false,
    speed: 600,
    spaceBetween: 24,
    navigation: {
      nextEl: item.parentNode.querySelector('.swiper-button-next'),
      prevEl: item.parentNode.querySelector('.swiper-button-prev'),
    }
  });
});
/*Сертификаты слайдер Конец*/


/*Табы*/
if (document.querySelectorAll('.tabs-navigation-item').length) {
  let tabsNavigationItem = document.querySelectorAll('.tabs-navigation-item');
  tabsNavigationItem.forEach(item => item.addEventListener('click', tabs));
}
function tabs(event) {
  event.preventDefault();
  let tabContainers = event.target.closest('.tabs').querySelectorAll('.tabs-tab'),
    tabsNavigationItem = document.querySelectorAll('.tabs-navigation-item'),
    tabTargetHash = this.hash.split('#')[1];

  tabContainers.forEach(item => {
    item.classList.remove('active')
    if (item.id == tabTargetHash) {
      item.classList.add('active');
    }
  });

  tabsNavigationItem.forEach(item => item.classList.remove('active'));
  event.target.classList.add('active');
}
/*Табы Конец*/


/*Аккордеоны*/
if (document.querySelectorAll('.accordion').length) {
  let accordion = document.querySelectorAll('.accordion');
  accordion.forEach(item => item.addEventListener('click', change));
  function change(event) {
    let targ = event.target;
    if (targ.classList.contains('active')) {
      targ.classList.remove('active');
      targ.nextElementSibling.classList.remove('active');
    } else {
      targ.classList.add('active');
      targ.nextElementSibling.classList.add('active');
    }
  }
}
/*Аккордеоны Конец*/


/*Фильтр*/
if (document.querySelectorAll('.filter-category-content').length) {
  let filterBlock = document.querySelectorAll('.filter-category-content');
  filterBlock.forEach(item => {
    let filterBlockOption = item.querySelectorAll('.filter-category-item'),
      blockHeight = 0;
    if (filterBlockOption.length > 5) {
      for (let i = 0; i < 5; i++) {
        blockHeight += filterBlockOption[i].offsetHeight;
      }
      item.classList.add('scroll')
      item.style.maxHeight = blockHeight + 'px';
    }
  })
}
/*Фильтр Конец*/


/*Показать пароль*/
if (document.querySelectorAll('.input-pass').length) {
  let inputPass = document.querySelectorAll('.input-pass');
  inputPass.forEach(item => item.addEventListener('click', change));
  function change(event) {
    if (event.target.previousElementSibling.getAttribute('type') == 'password') {
      event.target.previousElementSibling.setAttribute('type', 'text');
    } else {
      event.target.previousElementSibling.setAttribute('type', 'password');
    }
  }
}
/*Показать пароль Конец*/


/*Закрытие попапа*/
if (document.querySelectorAll('.popup__overlay').length) {
  document.querySelectorAll('.popup__overlay')[0].addEventListener('click', closePopup);
  document.querySelectorAll('.popup__close')[0].addEventListener('click', closePopup);
  function closePopup(event) {
    document.querySelectorAll('.popup.active')[0].classList.remove('active');
    document.querySelectorAll('body')[0].classList.remove('fixed');
  };
}
/*Закрытие попапа Конец*/