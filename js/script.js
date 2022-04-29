    // Clients Slider
  $('.clients-slider').owlCarousel({
      loop: true,
      margin: 30,
  })
  
  $(".owl-stage-outer").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items: 1
        },
        992:{
            items: 2
        }
    },
    navText: ["<i class='fa fa-angle-left icon left'></i>", "<i class='fa fa-angle-right icon right'></i>"]
});
$('.company .owl-carousel, .Study .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$(".case-study-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    center: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1024: { items: 3 },
      1200: { items: 4 },
    },
  });
  $(".banner-sub-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 3,
    dots: true,
    autoplay: true,
    autoHeight: true,
    autoplayHoverPause: true,
  });
$(document).ready(function() {
    $('.simg').magnificPopup({type:'iframe'});
});