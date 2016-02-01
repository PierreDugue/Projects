
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('#fullpage').fullpage({
        anchors: ['slideAbstract']
    });
    $(".selectorNavbar").fadeTo(0, 0.15);
    $(".selectorNavbar").mouseover(function () {
        $(this).stop(true, true).fadeTo("slow", 1);
    });
    $(".selectorNavbar").mouseleave(function () {
        $(this).stop(true, true).fadeTo(0.1, 0.15);
    });
});

$(document).on('click', '.navbar-collapse', function (e) {
    if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
        $(this).collapse('hide');
    }
});

$('.backgroundSection').foggy(false);