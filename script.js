function crismas() {
    const newYear = new Date("December 31, 2021 23:59");
    const now = new Date();

    const diff = newYear - now;
    const msInSec = 1000;
    const msInMinutes = 60*1000;
    const msInHours = 60*60*1000;
    const msInDays = 24*60*60*1000;

   const displayDays = Math.floor(diff/msInDays);
   document.querySelector('.days').textContent = displayDays;
   
   const displayHours = Math.floor((diff%msInDays)/msInHours);
   document.querySelector('.hours').textContent = displayHours;

   const displayMinutes = Math.floor((diff%msInHours)/msInMinutes);
   document.querySelector('.minutes').textContent = displayMinutes;

   const displaySecond = Math.floor((diff%msInMinutes)/msInSec);
   document.querySelector('.seconds').textContent = displaySecond;

   if(diff<=0){
      document.querySelector('.days').textContent = 0;
      document.querySelector('.hours').textContent = 0;
      document.querySelector('.minutes').textContent = 0;
      document.querySelector('.seconds').textContent = 0;
    clearInterval(timerID);
    hohoho();
    }
}

let timerID = setInterval(crismas, 1000);
function hohoho (){
   const head = document.querySelector('h1');
   head.textContent = "ЗДРАВСТВУЙ, НОВЫЙ ГОД!!!"
   head.classList.add('bred');
} 

// вариант  с одной кнопкой музыки
const button = document.querySelector('#mybtn');
const audio = document.querySelector('#myAudio');
const image = document.querySelector('.btn-music');

let i=0;

button.addEventListener('click', () =>{
   if (i === 0) {
     i = 1;
  audio.play();
  audio.volume = 0.5;
    image.setAttribute("src", "icon-pause.png");
}
  else {
    i=0;
    audio.pause();
    image.setAttribute("src", "icon-play.png");
  }
});


  // эффект падающего снега
  particlesJS("particles-js", {
   "particles": {
     "number": {
       "value": 800,
       "density": {
         "enable": true,
         "value_area": 800
       }
     },
     "color": {
       "value": "#ffffff"
     },
     "shape": {
       "type": "image",
       "stroke": {
         "width": 3,
         "color": "#fff"
       },
       "polygon": {
         "nb_sides": 5
       },
       "image": {
         "src": "http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png",
         "width": 100,
         "height": 100
       }
     },
     "opacity": {
       "value": 0.7,
       "random": false,
       "anim": {
         "enable": false,
         "speed": 5,
         "opacity_min": 0.1,
         "sync": false
       }
     },
     "size": {
       "value": 5,
       "random": true,
       "anim": {
         "enable": false,
         "speed": 20,
         "size_min": 0.1,
         "sync": false
       }
     },
     "line_linked": {
       "enable": false,
       "distance": 50,
       "color": "#ffffff",
       "opacity": 0.6,
       "width": 1
     },
     "move": {
       "enable": true,
       "speed": 8,
       "direction": "bottom",
       "random": true,
       "straight": false,
       "out_mode": "out",
       "bounce": false,
       "attract": {
         "enable": true,
         "rotateX": 300,
         "rotateY": 1200
       }
     }
   },
   "interactivity": {
     "detect_on": "canvas",
     "events": {
       "onhover": {
         "enable": true,
         "mode":  "bubble"
       },
       "onclick": {
         "enable": true,
         "mode": "repulse"
       },
       "resize": true
     },
     "modes": {
       "grab": {
         "distance": 150,
         "line_linked": {
           "opacity": 1
         }
       },
       "bubble": {
         "distance": 200,
         "size": 40,
         "duration": 2,
         "opacity": 8,
         "speed": 3
       },
       "repulse": {
         "distance": 200,
         "duration": 0.2
       },
       "push": {
         "particles_nb": 4
       },
       "remove": {
         "particles_nb": 2
       }
     }
   },
   "retina_detect": true
 });


