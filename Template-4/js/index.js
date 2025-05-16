let input = document.getElementById('input');
let list = document.getElementsByClassName('list');


list[0].addEventListener('click', clk)
function clk(){
    input.checked = false
}
$("#M1").click(function(){
    $(".hello").fadeIn(2000)
    $(".templates").fadeOut(0)
    $('.about').fadeOut(0)
    $('.contact').fadeOut(0)
})
$("#M2").click(function(){
    $(".hello").fadeOut(0)
    $(".templates").fadeIn(2000)
    $(".about").fadeOut(0)
    $(".contact").fadeOut(0)
})
$("#M3").click(function(){
    $(".hello").fadeOut(0)
    $(".templates").fadeOut(0)
    $('.about').fadeIn(2000)
    $('.contact').fadeOut(0)
})
$("#M4").click(function(){
    $(".hello").fadeOut(0)
    $(".templates").fadeOut(0)
    $('.about').fadeOut(0)
    $('.contact').fadeIn(2000)
})

