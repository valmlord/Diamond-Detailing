import './modules/jquery.js';
import './modules/sweetalert.js';
import modals from "./modules/modals";
import tabs from "./modules/tabs";


window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  modals();

  tabs(
    ".packages__tabs",
    ".packages__tab",
    ".packages__content",
    "packages__tab_active"
  );

});

// SCROLL HIDE MENU

window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// HAMBURGER

window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".header__links"),
    menuItem = document.querySelectorAll(".header__link"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("header__links_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("header__links_active");
    });
  });
});

// AJAX

jQuery(document).ready(function () {
  jQuery("form").submit(function () { // Событие отправки с формы
    var formData = jQuery(this).serialize(); // Собираем данные из полей
    jQuery.ajax({
      type: "POST", // Метод отправки
      url: "sendform.php", // Путь к PHP обработчику sendform.php
      data: formData,
      success: swal({
        title: "Спасибо за заявку!",
        type: "success",
        showConfirmButton: false,
        timer: 2000
      })
    });
    $(this).find('input, textarea').prop('disabled', true);
    event.preventDefault();
  });
});