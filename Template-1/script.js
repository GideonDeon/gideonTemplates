let  div = document.getElementById('div')
let  div2 = document.getElementById('div2')
let  div3 = document.getElementById('div3')
let  div4 = document.getElementById('div4')
let  div5 = document.getElementById('div5')
let  div6 = document.getElementById('div6')
let  div7 = document.getElementById('div7')
let  div8 = document.getElementById('div8')
let aside = document.getElementById('aside')
let aside2 = document.getElementById('aside2')
let aside3 = document.getElementById('aside3')
let nav = document.getElementById('x1nav')



addEventListener("scroll", scr);
function scr(){
    let scrolL = window.scrollY
    if(scrolL<240){
       nav.style.display = 'none'
    }
    else if(scrolL>240){
        nav.style.display = 'block'
       
    }
}

aside.addEventListener('click', button)
function button(){
    div.style.top = '15%';
    div.style.opacity = '1';
    div2.style.bottom = '15%';
    div2.style.opacity = '1';
    div3.style.left = '20%';
    div3.style.opacity = '1';
    div4.style.right = '20%';
    div4.style.opacity = '1';
    aside.style.display = 'none'
    aside2.style.display = 'block'
    aside3.style.display = 'none'
}
aside2.addEventListener('click', button2);
function button2(){
    div5.style.top = '15%';
    div5.style.opacity = '1';
    div6.style.bottom = '15%';
    div6.style.opacity = '1';
    div7.style.left = '20%';
    div7.style.opacity = '1';
    div8.style.right = '20%';
    div8.style.opacity = '1';
    aside.style.display = 'none'
    aside2.style.display = 'none'
    aside3.style.display = 'block'
}
aside3.addEventListener('click', button3)
function button3(){
    div.style.top = '40%';
    div.style.opacity = '0';
    div2.style.bottom = '40%';
    div2.style.opacity = '0';
    div3.style.left = '40%';
    div3.style.opacity = '0';
    div4.style.right = '40%';
    div4.style.opacity = '0';
    div5.style.top = '40%';
    div5.style.opacity = '0';
    div6.style.bottom = '40%';
    div6.style.opacity = '0';
    div7.style.left = '40%';
    div7.style.opacity = '0';
    div8.style.right = '40%';
    div8.style.opacity = '0';
    aside.style.display = 'block'
    aside2.style.display = 'none'
    aside3.style.display = 'none'
}

function check(tck){
    tck.checked = false
}