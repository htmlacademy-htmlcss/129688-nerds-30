const mainFooterButton = document.querySelector(".main-footer-button");
const letterPopup = document.querySelector(".modal-letter ");
const letterClose = letterPopup.querySelector(".modal-close");
const loginForm = letterPopup.querySelector(".letter-form");//нашли саму форму
const loginLogin = letterPopup.querySelector(".input-name");
const formEmail = letterPopup.querySelector(".input-email");
const formMessage = letterPopup.querySelector(".letter-message");

// Не все браузеры поддерживают localStorage, поэтому проверим работоспособность.
// Переменные помещаем в let, так как они изменяемые. Уже на 12 строке может измениться значение у storage>.

// let isStorageSupport = true;
// let storage = "";

// try {
//   storage = localStorage.getItem("login");
// } catch (err) {
//   isStorageSupport = false;
// }






mainFooterButton.addEventListener("click", function () {
  letterPopup.classList.add("modal-show");
  loginLogin.focus();
});

letterClose.addEventListener("click", function (evt) {
  // evt.preventDefault();
  letterPopup.classList.remove("modal-show");
  letterPopup.classList.remove("modal-error");
});

//Повесим обработчик отправки данных на форму и отменим его.

loginForm.addEventListener("submit", function (evt) {
  if (!loginLogin.value || !formEmail.value || !formMessage.value) {
    evt.preventDefault();
    // Добавим класс modal-error, если данные не проходят валидацию в форме.


    letterPopup.classList.remove("modal-error");
    letterPopup.offsetWidth = letterPopup.offsetWidth;
    letterPopup.classList.add("modal-error");

  }
});

// Добавим обработчик события, который будет отлавливать нажатие кнопки Esc и в случае, если модальное окно открыто, закрывать его.

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (letterPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      letterPopup.classList.remove("modal-show");
      letterPopup.classList.remove("modal-error");
    }
  }
});
