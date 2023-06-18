$(function(){
 var pathname = (window.location.pathname.match(/[^\/]+$/)[0]);
 $('nav ul li a').each(function() {
    var url = $(this).attr('href');
    var url_new = url.split("#");
    var new_url = url_new[0]
if (new_url == pathname){
    $(this).addClass('active');
    }
 });
});