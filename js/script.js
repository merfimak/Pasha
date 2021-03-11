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

//колькулятор цен
let vol = document.getElementById('vol');// куда выводим сумму
let formSelect_rodzaj = document.getElementById('formSelect_rodzaj');
let formSelect_montag = document.getElementById('formSelect_montag');
let formSelect_muzyka = document.getElementById('formSelect_muzyka');

let range = document.getElementById('formRange');
let range_value_div = document.getElementById('range_value_div');//где будем показывать минуты

let checkbox_input_lektor = document.getElementById('checkbox_input_lektor');
let checkbox_input_chrom = document.getElementById('checkbox_input_chrom');
let checkbox_input_promowanie = document.getElementById('checkbox_input_promowanie');

let range_price = Number(range.dataset.price);

let lektor_price = Number(checkbox_input_lektor.dataset.price);
let chrom_price = Number(checkbox_input_chrom.dataset.price);
let promowanie_price = Number(checkbox_input_promowanie.dataset.price);

range_value_div.innerHTML = range.value;//показываем изночальное количество минут 0

let inputs = document.getElementsByClassName('input');
for (i = 0; i < inputs.length; i++) {
inputs[i].addEventListener('input', () => {//любое изменение в инпутах
  let res = 0;//обнуляем каждый раз
  vol.innerHTML = res;
  if (checkbox_input_lektor.checked){ 
          res = res + lektor_price;
      }
   if (checkbox_input_chrom.checked){ 
      res = res + chrom_price;
  }
    if (checkbox_input_promowanie.checked){ 
      res = res + promowanie_price;
  }

  let select_rodzaj_sum = Number(formSelect_rodzaj.value);
  let select_montag_sum = Number(formSelect_montag.value);
  let select_muzyka_sum = Number(formSelect_muzyka.value);

  let range_sum = range.value * range_price;
  range_value_div.innerHTML = range.value;//показываем количество минут

  res = res + range_sum + select_rodzaj_sum + select_montag_sum + select_muzyka_sum;
  vol.innerHTML = res;

  });
}

//плавная прокрутка
document.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let href = this.getAttribute('href').substring(1);//возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки.
        const scrollTarget = document.getElementById(href);
         const topOffset = document.querySelector('.menu').offsetHeight;
       // const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;//возвращает размер элемента и его позицию относительно viewport (часть страницы, показанная на экране, и которую мы видим).
        const offsetPosition = elementPosition - topOffset;
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});


//popup
const popup = document.querySelector('.kontakt_cennik.popup')
const modal_body = document.querySelector('.modal_body')
const modal = document.querySelector('.modal')

popup.addEventListener('click', (event) => {
  modal.classList.toggle("active");
  modal_body.classList.toggle("active");
})

modal.addEventListener('click', (event) => {
  modal.classList.toggle("active");
  modal_body.classList.toggle("active");
})





}