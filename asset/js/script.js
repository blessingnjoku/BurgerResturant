
let menu = document.querySelector('#menu-bard')
let navbar = document.querySelector('.navbar')

menu.onclick =()=>{
  menu.classList.toggle('fa-times')
  navbar.classList.toggle('active')


}


window.onscroll =()=>{
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
  
  
  }


  document.querySelector('#searchIcon').onclick=()=>{
    document.querySelector('#formSearch').classList.toggle('active')
  }

  
  document.querySelector('#close').onclick=()=>{
    document.querySelector('#formSearch').classList.remove('active')
  }

//   ===== slider===


var swiper = new Swiper(".homeSlider", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  autoplay: {
        delay: 5000,
        disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop:true
 
});

// var swiper = new Swiper(".homeSlider", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 7500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   loop:true,
// });