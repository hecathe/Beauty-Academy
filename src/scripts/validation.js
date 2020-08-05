document.querySelectorAll('[data-type="tel"]').forEach(item => {
  let telMask = IMask(item, {
    mask: '+{7}(000)000-00-00'
  });
  /*Добавление и удаление класса при снятии фокуса с data-type="tel"*/
  telMask.on('accept', function () {
    item.classList.remove('input-border');
  });
  telMask.on('complete', function () {
    item.classList.add('input-border');
  });
});

let pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;


/*Добавление класса при снятии фокуса с текстовых инпутов*/
let noTelAndEmailInput = document.querySelectorAll('input:not([data-type="tel"]):not([data-type="email"]), textarea');
noTelAndEmailInput.forEach(item => {
  item.addEventListener('blur', function () {
    if (item.value != '') {
      item.classList.add('input-border');
    } else {
      item.classList.remove('input-border');
    }
  });
});


/*Добавление класса при снятии фокуса с data-type="email"*/
let emailInput = document.querySelectorAll('input[data-type="email"]');
emailInput.forEach(item => {
  item.addEventListener('blur', function () {
    if (item.value != '') {
      if (item.value.search(pattern) == 0) {
        item.classList.remove('input-err');
        item.classList.add('input-border');
      } else {
        item.classList.add('input-err');
        item.classList.remove('input-border');
      }
    } else {
      item.classList.remove('input-err');
      item.classList.remove('input-border');
    }
  });
});


/*Функция валидации*/
function raValidation(form) {
  let inputs = form.querySelectorAll('[data-required]'),
    temp = true;
  for (var i = 0; i < inputs.length; i++) {
    if (!inputs[i].classList.contains('input-border')) {
      inputs[i].classList.add('input-err');
      temp = false;
    } else {
      inputs[i].classList.remove('input-err');
    }
  }
  if (temp == false) {
    console.warn('Форма заполнена не корректно')
    return false;
  } else {
    console.log('Форма отправлена')
    return true;
  }
}


/*Обработка клика по кнопке отправки формы*/
let submitButton = document.querySelectorAll('button[type="submit"]');
submitButton.forEach(item => {
  item.addEventListener('click', function (event) {
    event.preventDefault();
    let form = this.closest('form');
    if (raValidation(form)) {
      if (!event.target.classList.contains('popup-btn')) {
        form.submit();
        ifSuccess(form);
      } else {
        document.querySelectorAll('#' + event.target.getAttribute('data-modal'))[0].classList.add('active');
        document.querySelectorAll('body')[0].classList.add('fixed');
      }
    }
  });
});


/*Функция для sucsess*/
function ifSuccess(form) {
  let inputsAndButton = form.querySelectorAll('input, textarea, button'),
    contentButton = form.querySelector('button').textContent;
  form.querySelector('button').textContent = 'Отправлено';
  inputsAndButton.forEach(item => {
    item.classList.remove('input-err');
    item.classList.remove('input-border');
    item.setAttribute('disabled', 'disabled');
  })
  setTimeout(() => {
    form.querySelector('button').textContent = contentButton;
    inputsAndButton.forEach(item => {
      item.value = '';
      item.removeAttribute('disabled');
    });
  }, 2000);
}