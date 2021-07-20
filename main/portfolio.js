$(function(){
///////////////////////////////

$("#main").fullpage({
    anchors:['xm01', 'xm02', 'xm03', 'xm04', 'xm05'],
    afterLoad: function(origin, destination, direction){
        $(".section").eq(destination.index).addClass("on").siblings().removeClass("on");
        $("nav li").eq(destination.index).addClass("on").siblings().removeClass("on");
    },
});

$("#mopen").on("click", function(){
    $(this).toggleClass("on");
    $("#cover_nav").toggleClass("on");
});

$(".m01 .xi-pause").on("click", function(){
    $(".m01_video").trigger("pause");
});

$(".m01 .xi-play").on("click", function(){
    $(".m01_video").trigger("play");
});

$("#cover_nav .link a").on("click", function(){
    $("#cover_nav").removeClass("on");
    $("#mopen").removeClass("on");
});


$(".pf01 .xi-pause").on("click", function(){
    $(".p01_video").trigger("pause");
});

$(".pf01 .xi-play").on("click", function(){
    $(".p01_video").trigger("play");
});







//////////////////////////////
});