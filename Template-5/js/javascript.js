// HarmburgerMenu

let check = document.getElementById('checkbox');
let closeMenu = document.getElementById('close');
let burgerList = document.getElementById('burgerList');
let burgerList1 = document.getElementById('burgerList1');
let burgerList2 = document.getElementById('burgerList2');
let burgerList3 = document.getElementById('burgerList3');


closeMenu.addEventListener('click', clsM);
burgerList.addEventListener('click', clsM);
burgerList1.addEventListener('click', clsM);
burgerList2.addEventListener('click', clsM);
burgerList3.addEventListener('click', clsM);
function clsM(){
    check.checked = false;
}

// HeaderCarousel

$(".carousel").owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
});

// CustomerCarousel

$(".caroul").owlCarousel({
    items:1,
    loop:true,
    margin:10,
    nav:true, 
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});

//counter

let numb = document.getElementsByClassName('numb');
let counter = 600;
let counter2 = 2000;
let counter3 = 700;

setInterval(() => {
    counter = counter + 2
    counter2++
    numb[0].innerText = counter
    numb[1].innerText = counter2
}, 2000);

setInterval(() => {
    counter3++
    numb[2].innerText = counter3
}, 5000);
