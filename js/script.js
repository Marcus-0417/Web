$(function () {

    /* 漢堡按鈕 */
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
        $(".navigation").toggleClass("show");
    });

    /* 滑動到指定位置 */
    $(".menu a").click(function () {
        let btn = $(this).attr("href");
        let pos = $(btn).offset();

        $("html,body").animate({ scrollTop: pos.top }, 1000);
    });

    // $('a[href^="#"]').click(function() {
    //     var speed = 500;
    //     var href = $(this).attr("href");
    //     var target = $(href == "#" || href == "" ? 'html' : href);
    //     var position = target.offset().top;
    //     $('body,html').animate({
    //         scrollTop: position
    //     }, speed, 'swing');
    //     return false;
    // });

    /* 至頂按鈕 */
    $("#gotop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });

    /* 至頂按鈕淡出淡入 */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $("#gotop").stop().fadeIn("", 1);
        } else {
            $("#gotop").stop().fadeOut();
        }
    });

    /* 移除行動裝置的背景影片 */
    if ($(window).width() <= 820) {
        $("#video_bg").remove();
    }

});