let previous = document.getElementsByClassName('previous');
let next = document.getElementsByClassName('next');
let images = ['images/picture1.png','images/picture2.png','images/picture3.png'];

let img = document.getElementById('img');
next[0].addEventListener("click", clk)
next[1].addEventListener("click", clk2)
next[2].addEventListener("click", clk3)
previous[0].addEventListener("click", clk4)
previous[1].addEventListener("click", clk5)
previous[2].addEventListener("click", clk6)
function clk(){
    img.setAttribute('src', images[1])
    next[0].style.display  = 'none'
    next[1].style.display  = 'block'
    next[2].style.display  = 'none'
    previous[0].style.display  = 'none'
    previous[1].style.display  = 'none'
    previous[2].style.display  = 'block'

}
function clk2(){
    img.setAttribute('src', images[2])
    next[0].style.display  = 'none'
    next[1].style.display  = 'none'
    next[2].style.display  = 'block'
    previous[0].style.display  = 'none'
    previous[1].style.display  = 'block'
    previous[2].style.display  = 'none'
}
function clk3(){
    img.setAttribute('src', images[0])
    next[0].style.display  = 'block'
    next[1].style.display  = 'none'
    next[2].style.display  = 'none'
    previous[0].style.display  = 'block'
    previous[1].style.display  = 'none'
    previous[2].style.display  = 'none'
}

function clk4(){
    img.setAttribute('src', images[2])
    previous[0].style.display  = 'none'
    previous[1].style.display  = 'block'
    previous[2].style.display  = 'none'
    next[0].style.display  = 'none'
    next[1].style.display  = 'none'
    next[2].style.display  = 'block'
   

}
function clk5(){
    img.setAttribute('src', images[1])
    previous[0].style.display  = 'none'
    previous[1].style.display  = 'none'
    previous[2].style.display  = 'block'
    next[0].style.display  = 'none'
    next[1].style.display  = 'block'
    next[2].style.display  = 'none'
    
}
function clk6(){
    img.setAttribute('src', images[0])
    previous[0].style.display  = 'block'
    previous[1].style.display  = 'none'
    previous[2].style.display  = 'none'
    next[0].style.display  = 'block'
    next[1].style.display  = 'none'
    next[2].style.display  = 'none'
}

let prev = document.getElementsByClassName('prev');
let nxt = document.getElementsByClassName('nxt');
let images2 = ['images/picture6.png','images/picture7.png','images/picture8.png','images/picture4.png'];

let img0 = document.getElementById('img1');
let img1 = document.getElementById('img2');
let img2 = document.getElementById('img3');


nxt[0].addEventListener('click', tck)
nxt[1].addEventListener('click', tck2)
nxt[2].addEventListener('click', tck3)
nxt[3].addEventListener('click', tck4)
prev[0].addEventListener('click', tck5)
prev[1].addEventListener('click', tck6)
prev[2].addEventListener('click', tck7)
prev[3].addEventListener('click', tck8)
function tck(){
    img0.setAttribute('src', images2[1])
    img1.setAttribute('src', images2[2])
    img2.setAttribute('src', images2[3])
    nxt[0].style.display = 'none'
    nxt[1].style.display = 'block'
    nxt[2].style.display = 'none'
    nxt[3].style.display = 'none'
    prev[0].style.display = 'none'
    prev[1].style.display = 'none'
    prev[2].style.display = 'none'
    prev[3].style.display = 'block'
}
function tck2(){
    img0.setAttribute('src', images2[2])
    img1.setAttribute('src', images2[3])
    img2.setAttribute('src', images2[0])
    nxt[0].style.display = 'none'
    nxt[1].style.display = 'none'
    nxt[2].style.display = 'block'
    nxt[3].style.display = 'none'
    prev[0].style.display = 'none'
    prev[1].style.display = 'none'
    prev[2].style.display = 'block'
    prev[3].style.display = 'none'
}
function tck3(){
    img0.setAttribute('src', images2[3])
    img1.setAttribute('src', images2[0])
    img2.setAttribute('src', images2[1])
    nxt[0].style.display = 'none'
    nxt[1].style.display = 'none'
    nxt[2].style.display = 'none'
    nxt[3].style.display = 'block'
    prev[0].style.display = 'none'
    prev[1].style.display = 'block'
    prev[2].style.display = 'none'
    prev[3].style.display = 'none'
}
function tck4(){
    img0.setAttribute('src', images2[0])
    img1.setAttribute('src', images2[1])
    img2.setAttribute('src', images2[2])
    nxt[0].style.display = 'block'
    nxt[1].style.display = 'none'
    nxt[2].style.display = 'none'
    nxt[3].style.display = 'none'
    prev[0].style.display = 'block'
    prev[1].style.display = 'none'
    prev[2].style.display = 'none'
    prev[3].style.display = 'none'
}

function tck5(){
    img0.setAttribute('src', images2[3])
    img1.setAttribute('src', images2[0])
    img2.setAttribute('src', images2[1])
    prev[0].style.display = 'none'
    prev[1].style.display = 'block'
    prev[2].style.display = 'none'
    prev[3].style.display = 'none'
    nxt[0].style.display = 'none'
    nxt[1].style.display = 'none'
    nxt[2].style.display = 'none'
    nxt[3].style.display = 'block'
}
function tck6(){
    img0.setAttribute('src', images2[2])
    img1.setAttribute('src', images2[3])
    img2.setAttribute('src', images2[0])
    prev[0].style.display = 'none'
    prev[1].style.display = 'none'
    prev[2].style.display = 'block'
    prev[3].style.display = 'none'
    nxt[0].style.display = 'none'
    nxt[1].style.display = 'none'
    nxt[2].style.display = 'block'
    nxt[3].style.display = 'none'
}
function tck7(){
    img0.setAttribute('src', images2[1])
    img1.setAttribute('src', images2[2])
    img2.setAttribute('src', images2[3])
    prev[0].style.display = 'none'
    prev[1].style.display = 'none'
    prev[2].style.display = 'none'
    prev[3].style.display = 'block'
    nxt[0].style.display = 'none'
    nxt[1].style.display = 'block'
    nxt[2].style.display = 'none'
    nxt[3].style.display = 'none'
}    
function tck8(){
    img0.setAttribute('src', images2[0])
    img1.setAttribute('src', images2[1])
    img2.setAttribute('src', images2[2])
    prev[0].style.display = 'block'
    prev[1].style.display = 'none'
    prev[2].style.display = 'none'
    prev[3].style.display = 'none'
    nxt[0].style.display = 'block'
    nxt[1].style.display = 'none'
    nxt[2].style.display = 'none'
    nxt[3].style.display = 'none'
}

function tick(tickit){
    tickit.checked = false
}