let main = document.getElementById("main0");
let cosm = document.getElementById("cosm");
let how = document.getElementById('how');
let howM = document.getElementById('howM')
let dients =  document.getElementById("dients");
let dientsM = document.getElementById('dientsM')
let story = document.getElementById("story");
let storyM = document.getElementById("storyM");
let learn1 = document.getElementsByClassName("learn1");
let learn2 = document.getElementsByClassName("learn2");
let learn3 = document.getElementsByClassName("learn3");
let learn4 = document.getElementsByClassName("learn4");
let main1 = document.getElementById("main1");
let main2 = document.getElementById("main2");
let main3 = document.getElementById("main3");
let main4 = document.getElementById("main4");
cosm.addEventListener("click", aboutus);
main1.addEventListener("click", aboutus2);
function aboutus(){
    main.style.display = "none"
    learn1[0].style.display = "block"
}
function aboutus2(){
    main.style.display = "block"
    learn1[0].style.display = "none"
}
how.addEventListener("click", ingri);
howM.addEventListener("click", ingri);
main2.addEventListener("click", ingri2);
function ingri(){
    main.style.display = "none"
    learn2[0].style.display = "block"
}
function ingri2(){
    main.style.display = "block"
    learn2[0].style.display = "none"
}
dients.addEventListener("click", itWork);
dientsM.addEventListener("click", itWork);
main3.addEventListener("click", itWork2);
function itWork(){
    main.style.display = "none"
    learn3[0].style.display = "block"
}
function itWork2(){
    main.style.display = "block"
    learn3[0].style.display = "none"
}
story.addEventListener("click", ourStory);
storyM.addEventListener("click", ourStory);
main4.addEventListener("click", ourStory2);
function ourStory(){
    main.style.display = "none"
    learn4[0].style.display = "block"
}
function ourStory2(){
    main.style.display = "block"
    learn4[0].style.display = "none"
}


setTimeout(openn, 1000)
function openn(){
    let cover1 = document.getElementsByClassName('cover1');
    cover1[0].style.width ='0%'
    
}

window.addEventListener("scroll", scroltop)
function scroltop(){
    let b_top = document.getElementById('beauty').offsetTop;
    let cover2 = document.getElementsByClassName('cover2')
    let due = document.getElementById('due');
    if(window.scrollY >= b_top){
        cover2[0].style.width = '0%'
        due.style.opacity = "1"
    }
}scroltop()

window.addEventListener('scroll', scroltop2)
function scroltop2(){
    let opening2 = document.getElementById('opening2').offsetTop;
    let cover3 = document.getElementsByClassName('cover3')
    let we = document.getElementById('we')
    if(window.scrollY >= opening2){
        cover3[0].style.width = '0%'
        we.style.opacity = "1"
    }
}

window.addEventListener('scroll', scroltop2M)
function scroltop2M(){
    let opening2M = document.getElementById('opening2M').offsetTop;
    let cover3M = document.getElementsByClassName('cover3M')
    let weM = document.getElementById('weM')
    if(window.scrollY >= opening2M){
        cover3M[0].style.width = '0%'
        weM.style.opacity = "1"
    }
}

window.addEventListener('scroll', scroltop3)
function scroltop3(){
    let opening3 = document.getElementById('opening3').offsetTop;
    let cover4 = document.getElementsByClassName('cover4')
    let dientss = document.getElementById('dientss')
    if(window.scrollY >= opening3){
        cover4[0].style.width = '0%'
        dientss.style.opacity = "1"
    }
}

window.addEventListener('scroll', scroltop3M)
function scroltop3M(){
    let opening3 = document.getElementById('opening3M').offsetTop;
    let cover4M = document.getElementsByClassName('cover4M')
    let dientssM = document.getElementById('dientssM')
    if(window.scrollY >= opening3){
        cover4M[0].style.width = '0%'
        dientssM.style.opacity = "1"
    }
}

window.addEventListener('scroll', scroltop4)
function scroltop4(){
    let opening4 = document.getElementById('opening4').offsetTop;
    let cover5 = document.getElementsByClassName('cover5')
    let storys = document.getElementById('storys')
    if(window.scrollY >= opening4){
        cover5[0].style.width = '0%'
        storys.style.opacity = "1"
    }
}

window.addEventListener('scroll', scroltop4M)
function scroltop4M(){
    let opening4M = document.getElementById('opening4M').offsetTop;
    let cover5M = document.getElementsByClassName('cover5M')
    let storysM = document.getElementById('storysM')
    if(window.scrollY >= opening4M){
        cover5M[0].style.width = '0%'
        storysM.style.opacity = "1"
    }
}


































