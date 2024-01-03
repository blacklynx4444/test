$(document).ready(function () {
    $('.best_boardgames_slide').slick({
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 3,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '30px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '30px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.best_boardgames_slide_for_mobile').slick({
        centerMode: true,
        centerPadding: '50px',
        autoplay: true,
    });

    $('.menu_bar').click(function(){
        $('.mobile_menu').animate({'right': '0'}, 1000);
    })
    $('.close_mobile_menu').click(function(){
        $('.mobile_menu').animate({'right': '-120%'}, 1000);
    })
});