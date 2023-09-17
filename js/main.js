$(document).ready(function(){


    $('.nav-link').click(function(){
        $('.nav-item').find('.nav-link').removeClass('active')
        $(this).addClass('active')
    })
   
    $(".content .owl-carousel").owlCarousel({
        loop:true,
        margin:60,
        dots:true,
        autoplay:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }});

    $(".owl-carousel").owlCarousel();
});