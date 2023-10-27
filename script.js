/ Код для обработки формы входа в аккаунт
var loginForm = document.getElementById("login-form");

if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Отменяем стандартное поведение отправки формы

    // Получаем значения полей формы
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Здесь можно добавить логику проверки введенных данных

    alert("Вы вошли в аккаунт!"); // Вместо этого можно добавить редирект на страницу аккаунта
  });
}
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");
let listItem = document.querySelectorAll(".bx-search");

btn.onclick = function(){
	sidebar.classList.toggle("active")
	
}
searchBtn.onclick = function(){
	sidebar.classList.toggle("active")
	
}
