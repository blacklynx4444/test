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
});