$(function(){

  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1175,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
      }
    }
    ]
  });

  $('.menu__btn').on('click', function(){
   $('.menu__list').toggleClass('menu__list--active')
  });

});