(function($, api){
    $(document).ready(function(){
        var root = $('#i-12-bitrix-news-list-default');
        var slider = root.find('.owl-carousel').owlCarousel({
            items: 1,
            autoplay: true,
            autoplaySpeed: 500,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            loop: true,
            nav: true,
            navText: [
                '<span class="far fa-chevron-left"></span>',
                '<span class="far fa-chevron-right"></span>'
            ],
            dots: true,
            dotsData: true,
            dotsContainer: root.find('.slider-dots')
        });
    });
})(jQuery);