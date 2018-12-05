
// INITIALIZATION

// IMAGE
var img1 = $('.img1').attr('src');
var img2 = $('.img2').attr('src');
var img3 = $('.img3').attr('src');
var img4 = $('.img4').attr('src');
var img5 = $('.img5').attr('src');

// TITLE
var title1 =  $('h3:first').text();
var title2 =  $('.title2').text();
var title3 =  $('.title3').text();
var title4 =  $('.title4').text();
var title5 =  $('.title5').text();

// CONTENT
var content1 = $('p:first').text();
var content2 = $('.content2').text();
var content3 = $('.content3').text();
var content4 = $('.content4').text();
var content5 = $('.content5').text();

// EVENTS DIV
$('.btn1').click(function() {
$('.readmore img').attr('src', img1);
$('.readmore h3').text(title1);
$('.readmore p').text(content1);
$('.readmore').css('display', 'block');
$('html, body').animate({
    scrollTop: ($('.readmore').offset().top)
},1500);
});

$('.btn2').click(function() {
$('.readmore img').attr('src', img2);
$('.readmore h3').text(title2);
$('.readmore p').text(content2);
$('.readmore').css('display', 'block');
$('html, body').animate({
    scrollTop: ($('.readmore').offset().top)
},1500);
});

$('.btn3').click(function() {
$('.readmore img').attr('src', img3);
$('.readmore h3').text(title3);
$('.readmore p').text(content3);
$('.readmore').css('display', 'block');
$('html, body').animate({
    scrollTop: ($('.readmore').offset().top)
},1500);
});

$('.btn4').click(function() {
$('.readmore img').attr('src', img4);
$('.readmore h3').text(title4);
$('.readmore p').text(content4);
$('.readmore').css('display', 'block');
$('html, body').animate({
    scrollTop: ($('.readmore').offset().top)
},1500);
});

$('.btn5').click(function() {
$('.readmore img').attr('src', img5);
$('.readmore h3').text(title5);
$('.readmore p').text(content5);
$('.readmore').css('display', 'block');
$('html, body').animate({
    scrollTop: ($('.readmore').offset().top)
},1500);
});
