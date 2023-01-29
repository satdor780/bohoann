$(document.body).ready(  function(){

    $('.offer__inner').slick({
      slidesToShow: 1,
      infinite: false,
      dots: false,
      arrows: false,
      variableWidth: true
    });

    $('.cards').slick({
      slidesToShow: 1,
      infinite: true,
      dots: false,
      variableWidth: true

      // responsive: [
      //       {
      //           breakpoint: 768,
      //           settings: "unslick"
      //       }
      //   ]
    });


    $('.categories__cards').slick({
      slidesToShow: 1,
      infinite: true,
      dots: false,
      variableWidth: true

      // responsive: [
      //     {
      //         breakpoint: 768,
      //         settings: "unslick"
      //     }
      // ]
    });



  setTimeout(function () {
    let arrows = document.querySelectorAll('.slick-prev')
    let arrows2 = document.querySelectorAll('.slick-next')
    let arrows__cn =  document.querySelectorAll('.googs__slick-arrows')

    arrows.forEach(function(item, i) {
      arrows__cn[i].append(arrows[i])
    });
    arrows2.forEach(function(item, i) {
      arrows__cn[i].append(arrows2[i])
    });
  }, 500);

  $('.answers__item').on('click', function(){
    $(this).children('.answer').toggleClass('active')
    if($(this).children('.answer').hasClass('active')){
      $(this).children('.question').children('.button').text('x')
    }else{
      $(this).children('.question').children('.button').text('+')
    }
  })

  if(window.innerWidth < 1370){
    $('.intro img').attr('src','./assets/images/intro-1024.png');
    $('.about-us__brend .slider__item img').attr('src','./assets/images/about-1024.png');
   
  }
  if(window.innerWidth < 1370){
    $('.intro img').attr('src','./assets/images/intro-320.png');
    $('.footer__content-header').append($('footer .footer__contact > .social'))
    $('footer .footer__contact').append($('footer .gift'))
    $('footer .gift').append($('footer .designer > .social'))
  }

  if(window.innerWidth < 768){
    $('header .logo img').attr('src','./assets/images/icons/logo-mini.svg');
    $('.about-us__brend .slider__item img').attr('src','./assets/images/about-320.png');
    slickify();
  }
  

});