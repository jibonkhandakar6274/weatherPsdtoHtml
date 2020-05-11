// $(document).ready(function () {
//     $('.go-top-btn a').click(function () {
//         $('html , body').animate({
//             "scrollTop": "0"
//         }, 2000);
//     });

//     $('.go-top-btn a').hide(); //eita na dile default vabe button eshe thkbe website load dewar pore

//     $(window).scroll(function () {
//         var ourwindow = $(window).scrollTop();
//         if (ourwindow < 200) {
//             $('.go-top-btn a').fadeOut();
//         } else {
//             $('.go-top-btn a').fadeIn();

//         }
//     });

//     $(window).scroll(function () {
//         var ourwindow = $(window).scrollTop();
//         if (ourwindow > 200) {
//             $('.topbar').hide();
//             $('.main-menu').addClass('position');
//         } else {
//             $('.topbar').show();
//             $('.main-menu').removeClass('position');
//         }
//     });

//     $('.navbar-nav a[href^="#"]').click(function (e) {
//         e.preventDefault();
//         var targetscroll = this.hash;

//         $('html , body').animate({
//             scrollTop: $(targetscroll).offset().top - 60
//         }, 500);
//     });

// });

$(document).ready(function () {
   
    // sticky header Start

    $(window).scroll(function () {
       
        var scrollWindow = $(this).scrollTop();

        if (scrollWindow > 200) {
            $('header').addClass('fixed-header');
        }
        else {
            $('header').removeClass('fixed-header');
        }
    });
    // sticky header End

    // click menu target Start
    $('.navbar-nav a[href^="#"]').click(function (e) {
        e.preventDefault();
        var target_menu = this.hash;
        $('html,body').animate({
            scrollTop: $(target_menu).offset().top - 25
        },1000);
    });
    // click menu target End

    // go-top Start here
    $(window).scroll(function () {
        var scrollWindow = $(this).scrollTop();
        if (scrollWindow > 200) {
            $('.go-top').fadeIn();
        }
        else {
            $('.go-top').fadeOut();
        }
    });

    $('.go-top').click(function () {
        $('html,body').animate({
           scrollTop : 0
        },1000);
    });
    // go-top End here

    // banner go-bottom Start here
    $('#banner a[href^="#"]').click(function (e) {
        e.preventDefault();
        var target_menu = this.hash;
        $('html,body').animate({
            scrollTop: $(target_menu).offset().top - 25
        },1000)
    });
    // banner go-bottom End here
});