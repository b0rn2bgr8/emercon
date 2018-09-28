$(function () {
    $(window).stellar();
    var gal = $('#jsGallery').jsGallery({
        zIndex: 1000
    });
    
    $('#showGal').click(() => {
        gal.jsGallery('show', 'Album 1', 1);
    })
    $("body a").bind("click", function () {
        $("html, body").stop().animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
})