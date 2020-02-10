let burger = document.querySelector('.menu__burger');
let menu = document.querySelector('.menu');
let logotext = document.querySelector('.menu__logo-text');
let menutext = document.querySelectorAll('.menu__text');
let wrapper = document.querySelector('.wrapper-content');
let logo = document.querySelector('.menu__logo');


burger.addEventListener('click', function (e){
    e.preventDefault();
    if (this.classList.contains('menu__burger-line_active')){
        this.classList.remove('menu__burger-line_active');
        menu.classList.remove('menu_active');
        logotext.classList.remove('menu__burger_active');
        wrapper.classList.remove('wrapper-content_active');
        logo.classList.remove('menu__logo_active');
        for (let el of menutext){
            el.classList.remove('menu__burger_active');
        }
    }
    else{
        this.classList.add('menu__burger-line_active');
        menu.classList.add('menu_active');
        logotext.classList.add('menu__burger_active');
        wrapper.classList.add('wrapper-content_active');
        logo.classList.add('menu__logo_active');
        for (let el of menutext){
            el.classList.add('menu__burger_active');
        }
    }
})