let Navbar = document.querySelector('.navbar');
let Fabars = document.querySelector('.fa-bars');


Fabars.onclick = () =>{
    Navbar.classList.toggle("active")
};



      var swiper = new Swiper(".Home-slider", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


      var swiper = new Swiper(".Team-slider", {
          loop: true,
          slidesPerView: 1,
          spaceBetween: 10,
          breakpoints:{
              "0":{
                  sliderPerView: 1,
                  autoplay:{
                    delay:700,
                    disbleOnInteraction:false,
                  },
          },
          "768":{
            slidesPerView: 2,
          },
          "1020":{
            slidesPerView: 3,
          },
          
        },
      });



