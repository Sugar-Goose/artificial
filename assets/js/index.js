new Swiper('.advatages-slider',{
    pagination: {
        el: ".advatages_slider-dots",
        clickable: true,
    },

	simulateTouch: true,
	grabCursor: true,
    loop: false,
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    freeMode: true,
    breakpoints: {
        320:{
            slidesPerView: 1,

        },
        600:{
            slidesPerView: 2,
        },
        882: {    
            slidesPerView: 3,
        }
    },
});


const burger = document.querySelector('.burger');
const closeMobileMenu = document.querySelector('.close-button_body');
const MobileMenu = document.querySelector('.header-nav-wrapper');

function closeMenu(){
    if(MobileMenu.classList.contains('active')){
        MobileMenu.classList.remove('active');
    }
}

burger.addEventListener('click', function(){
    if(!MobileMenu.classList.contains('active')){
        MobileMenu.classList.add('active');
    }
});

closeMobileMenu.addEventListener('click', function(){
    closeMenu();
});

window.addEventListener('resize', function(){
    if(window.matchMedia("(min-width: 767.8px)").matches){
        closeMenu();
    }
});

MobileMenu.addEventListener('click', function(e){
    let target = e.target;
    if(target.classList.contains('header-nav__link')){
        closeMenu();
    }
});
