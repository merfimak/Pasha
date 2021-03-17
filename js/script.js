window.onload = function() {



//если мы на страничке потфолио то запустыться и остальные скрипты
if (window.location.pathname.match(/^\/portfolio.html(\/|$)/)) {

 var swiper = new Swiper('.foto_swiper', {
 effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
    });

  var swiper = new Swiper('.video_swiper', {
 effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
    });



function videoPopup(){
const video_popup_img = document.querySelectorAll('.video_popup')//все Контейнеры с фотками внутри, они засунуты бекграундом с  ibg()
const modal_video_body = document.querySelector('.modal_video_body')
const modalvideo = document.querySelector('.modalvideo')
const modal_for_video = document.querySelector('.modal_for_video')
const video = document.querySelector('.modalvideo')
for (i = 0; i < video_popup_img.length; i++) {
video_popup_img[i].addEventListener('click', (event) => { 
    src = event.target.dataset.src;
    modalvideo.src = this.src;
     modal_for_video.classList.add("active");
     modal_video_body.classList.add("active");
      
   })
}
modal_for_video.addEventListener('click', (event) => {
video.pause();
modal_for_video.classList.remove("active");
modal_video_body.classList.remove("active");})
}

videoPopup()

}





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


function ibg(){
let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}
ibg();


document.querySelectorAll('._slow_scroll').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let arr= this.getAttribute('href').split('#');//достаем ссылку делим ее по #  
        let href = arr[arr.length - 1];//достаем последний элимент массива это и будет название нужного нам блока
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




//если мы не на страничке потфолио то запустыться и остальные скрипты
if (!window.location.pathname.match(/^\/portfolio.html(\/|$)/)) {

//дрон
const p = document.querySelector('.main_drone_img'),
    fluigeart = window.matchMedia("(min-width: 726px)");//ширина экрана
    wrapper.addEventListener('mousemove', function(e) {
     if(fluigeart.matches){
        p.style.transform = `translate(${e.clientX/14}px, ${e.clientY/14}px)`;
       }
       
    });



//колькулятор цен
let vol = document.getElementById('vol');// куда выводим сумму
let formSelect_rodzaj = document.getElementById('formSelect_rodzaj');
let formSelect_montag = document.getElementById('formSelect_montag');
let formSelect_muzyka = document.getElementById('formSelect_muzyka');

let range = document.getElementById('formRange');
let range_value_div = document.getElementById('range_value_div');//где будем показывать минуты
let range_price = Number(range.dataset.price);//достаем стоимость одной минуты
range_value_div.innerHTML = range.value;//показываем изночальное количество минут


let checkbox_input_lektor = document.getElementById('checkbox_input_lektor');
let checkbox_input_chrom = document.getElementById('checkbox_input_chrom');
let checkbox_input_promowanie = document.getElementById('checkbox_input_promowanie');

let lektor_price = Number(checkbox_input_lektor.dataset.price);
let chrom_price = Number(checkbox_input_chrom.dataset.price);
let promowanie_price = Number(checkbox_input_promowanie.dataset.price);


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

  //достаем цену выбранного пункта из data-price пункта option 
  let select_rodzaj_sum = Number(formSelect_rodzaj.options[formSelect_rodzaj.selectedIndex].getAttribute('data-price'));
  let select_montag_sum = Number(formSelect_montag.options[formSelect_montag.selectedIndex].getAttribute('data-price'));
  let select_muzyka_sum = Number(formSelect_muzyka.options[formSelect_muzyka.selectedIndex].getAttribute('data-price'));

  // умножаем минуты на стоимость 1 минуты
  let range_sum = range.value * range_price;
  range_value_div.innerHTML = range.value;//показываем количество минут

  res = res + range_sum + select_rodzaj_sum + select_montag_sum + select_muzyka_sum;
  vol.innerHTML = res;

  });
}



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


//форма
const form = document.getElementById('form');
const kontakt = document.getElementById('kontakt');
const message = document.getElementById('message');
form.addEventListener('submit', formSend); 




async function formSend(e){
  e.preventDefault();
  let error = formValidate(form);// проверяем своим валидатором
   if(error === 0){
    let formData = new FormData(form);
    formData.set('min', range.value);//добовляем количество минут
      kontakt.classList.add('_sending');//когда убедились что ошибок нет, делаем так что бы посетитель понял что почта отправляется


      setTimeout(() => {
for(var pair of formData.entries()) {
   console.log(pair[0]+ ', '+ pair[1]);
}



        //очищаем всю форму
         form.reset();
         range.value = 1;
         range_value_div.innerHTML = range.value;
         vol.innerHTML = '';
         kontakt.classList.remove('_sending');
         //выыодим сообщение об успехе
         message.classList.add('_success');
         message.innerHTML = 'заявка успешно отправлена';
      }, 1000)


     
     }else{
       message.classList.add('_false');
      message.innerHTML = 'заполните корректно все поля формы';
     }
       //kontakt.classList.add('_sending');//когда убедились что ошибок нет, делаем так что бы посетитель понял что почта отправляется

/*let formData = new FormData(form);// с помощью new FormData вытягиваем все данные из полей
  
  if(error === 0){
    form.classList.add('_sending');//когда убедились что ошибок нет, делаем так что бы посетитель понял что почта отправляется
    let response = await fetch('sendmail.php', {
      method: 'POST',
      body: formData
    });
    if(response.ok){
      let result = await response.json();//получаем ответ
      alert(result.message);
      formPreview.innerHTML = '';//очищаем img
      form.reset();//очищаем всю форму
      form.classList.remove('_sending');
    }else{
      alert('ошибка');
      form.classList.remove('_sending');
    }
  }else{
    alert('заполните все поля');
  }*/

}






function formValidate(form){
  let error = 0;
  let formReq = document.querySelectorAll('._req');
  for(let index = 0; index < formReq.length; index++){
    const input = formReq[index];
    formRemoveError(input);

    if(input.classList.contains('_email')){

      if(input.value === ''){
        input.placeholder = 'это поле обязательно для заполнения';
         formAddError(input);
         error++;
      }
      if(input.value != '' && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)){
        input.value = '';
         input.placeholder = 'введите правельный адрес';
        formAddError(input);
        error++;
      }
    } else if(input.classList.contains('_text')){
        if(input.value === ''){
          input.placeholder = 'это поле обязательно для заполнения';
           formAddError(input);
           error++;
        }
        if(input.value != '' && input.value.length < 2){
          input.value = '';
          input.placeholder = 'минимальное количество знаков больше 2';
           formAddError(input);
           error++;
        }
        if(input.value != '' && input.value.length > 5){
          input.value = '';
          input.placeholder = 'максимально количество знаков не больше 5';
           formAddError(input);
           error++;
        }
      }  
}
return error;
}

function formAddError(input){
  
  input.parentElement.classList.add('_error');
  input.classList.add('_error');
}

function formRemoveError(input){
  input.parentElement.classList.remove('_error');
  input.classList.remove('_error');
}


}











}