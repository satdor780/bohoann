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
});

setTimeout(function () {
  let arrows = $('.slick-prev')
  
  let ff = arrows.parent().parent().children().children('.googs__slick-arrows')
  console.log(ff, arrows)
  arrows.append(ff);
}, 1000)