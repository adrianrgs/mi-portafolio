/* ===============================
            PRELOADER
    ===============================*/

$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(1000).fadeOut();
});

/* ===============================
            CAROUSEL TEAM SECTION
    ===============================*/
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        loop: true,
        autoplay: true,
        smartSpeed: 400,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">']
    });
});

/* ===============================
            PROGRESS BARS
    ===============================*/
$(function () {

    $("#progress-elements").waypoint(function () {

        $('.progress-bar').each(function () {

            $(this).animate({
                width: $(this).attr('aria-valuenow') + '%'
            }, 1000);

        });

        this.destroy()
    }, {
        offset: 'bottom-in-view'
    })
});

/* ===============================
            RESPONSIVE TABS
    ===============================*/
$(function () {
    $('#services-tabs').responsiveTabs({
    startCollapsed: 'accordion',
    animation: 'slide'
});
});

/* ===============================
            Portfolio ISOTOPE
    ===============================*/
$(window).on('load', function () {
    
    // iTIALIZE iSOTOPE
    $('#isotope-container').isotope({
    });
    
    // filter items on button click
    $("#isotope-filters").on('click', 'button', function(){
        
        // get filter value
        var filterValue = $(this).attr('data-filter');
        
        // filter items
        $('#isotope-container').isotope({
            filter: filterValue
        });
        
        // active button
        $('#isotope-filters').find('.active').removeClass('active')
        $(this).addClass('active')
    });
    
});



















