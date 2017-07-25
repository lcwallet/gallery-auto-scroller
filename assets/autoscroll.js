$(document).ready(function(){

$("html, body").animate({
    scrollTop: $('html, body').get(0).scrollHeight
}, (30000));

 $('html, body').bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(e){
if ( e.which > 0 || e.type === "mousedown" || e.type === "mousewheel"){
     $('html, body').stop(true,false);
}
});

// $('body.detail').mouseover(function(e) {
// $(this).stop(true);
      
//     }).mouseout(function() {
//         $(this).stop(false);
//     });
 
});


// //better version
// $(document).ready(function(){
// var isPaused = false;
// var direction = 1;
// var element = $('#autoscroll');

// // interval for scroll.
// setInterval(function () {
//     if (!isPaused) {
//         var pos = element.scrollTop();
//         var offset = 1 * direction;
//         element.scrollTop(pos + offset);

//         // Change the scroll direction when hit an end.
//         if ((element[0].scrollHeight - element.scrollTop() == element.outerHeight()) || (element.scrollTop() <= 0)) {
//             direction *= -1;
//         }
//     }

// }, 70);

// $('article').hover(

// function () {
//     isPaused = true;
// }, function () {
//     isPaused = false;
// });

// });