const btnMenuMobile = document.getElementById('btnMenuMobile');
const menu = document.getElementById('menu');

btnMenuMobile.addEventListener('click', function () {
    menu.classList.toggle("show");
});