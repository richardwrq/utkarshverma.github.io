$(document).ready(function(){
var images=['/images/bg1.jpg',
            '/images/bg2.jpeg',
            '/images/bg3.jpeg',
            '/images/bg4.jpeg',
            '/images/bg5.jpeg',
            '/images/bg6.jpeg',
            '/images/bg7.jpeg',];

var randomNumber = Math.floor(Math.random() * images.length);
var bgImg = 'url(' + images[randomNumber] + ')';

$('body').css({'background':bgImg, 'background-size':'cover', });

});