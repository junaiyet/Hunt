


$(window).scroll(function(){
  if($(window).scrollTop() > 200){
    $(".menu").addClass("kata")
  }else{
    $(".menu").removeClass("kata")
  }
  if($(window).scrollTop() > 1000){
    $(".backtotop").fadeIn()
  }else{
    $(".backtotop").fadeOut()
  }

  
})

$(".backtotop").click(function(){
  $("html,body").animate({
    scrollTop:0,
  },1000)
})








// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 100
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });







  new WOW().init();






$('.banner-slider').slick({
  arrows: true,
  prevArrow: '<i class="fas fa-arrow-alt-circle-left prev"></i>',
  nextArrow: '<i class="fas fa-arrow-alt-circle-right next"></i>',
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
      }
    },
    {
      breakpoint: 576,
      settings: {
     arrows:false,
     dots:true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});






$('.service_slider').slick({
  arrows: true,
  prevArrow: '<i class="fas fa-chevron-up up"></i>',
  nextArrow: '<i class="fas fa-chevron-down down"></i>',
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  centerMode: true,
  centerPadding: 0,
  responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
        vertical: false,

      }
    },
    {
      breakpoint: 576,
      settings: {
     arrows:false,
     dots:true,
     slidesToShow: 1,
     slidesToScroll: 1,
     vertical: false,

      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});





$('.img_slider').slick({
  arrows: true,
  prevArrow: '<i class="fas fa-chevron-up top"></i>',
  nextArrow: '<i class="fas fa-chevron-down bottom"></i>',
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  centerMode: true,
  centerPadding: 0,
  asNavFor: '.text_slider',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: false,
        arrows:true

      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: false,
        arrows:true

      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]


});
$('.text_slider').slick({
  arrows: false,
  // prevArrow: '<i class="fas fa-chevron-up up"></i>',
  // nextArrow: '<i class="fas fa-chevron-down down"></i>',
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.img_slider',
  fade: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        arrows:false,
        dots:false,
      }
    },


    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});

$('.counter').counterUp({
  delay: 10,
  time: 1000
});

$('.fotter-slider').slick({
  arrows: false,
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay:true,
  centerMode:true,
  centerPadding:0,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        autoplay:false,

      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});
$(document).ready(function(){
  $('.venobox').venobox(); 
});