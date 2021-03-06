window.onload = function() {

//бургер
const header__burger = document.querySelector('.header__burger');
const menu__nav = document.querySelector('.menu__nav');
const menu__link = document.querySelectorAll('.menu__link');
header__burger.addEventListener('click', (event) => { 
  header__burger.classList.toggle('active');
  menu__nav.classList.toggle('active');
})
for (i = 0; i < menu__link.length; i++) {
  menu__link[i].addEventListener('click', (event) => { 
  header__burger.classList.toggle('active');
  menu__nav.classList.toggle('active');
})
}

//затемнение при прокрутке
window.addEventListener('scroll', function(e) {
const scro = document.querySelector('.menu');
if(pageYOffset > 240){
  scro.style.transition = '0.5s';
  scro.style.backgroundColor = '#000000';
}else{
  scro.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
}
});



//дрон
const p = document.querySelector('.main_drone_img'),
    fluigeart = window.matchMedia("(min-width: 726px)");//ширина экрана
    wrapper.addEventListener('mousemove', function(e) {
     if(fluigeart.matches){
        p.style.transform = `translate(${e.clientX/14}px, ${e.clientY/14}px)`;
       }
       
    });




    function ibg(){

let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}

ibg();

}