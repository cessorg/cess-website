$(document).on('ready', function() {
    $(".center").slick({
        dots: false,
        infinite: true,
        centerMode: false,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,
        responsive: [
        {
        breakpoint: 1324,
        settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        centerMode: false,
        infinite: true,
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
        breakpoint: 480,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });

});