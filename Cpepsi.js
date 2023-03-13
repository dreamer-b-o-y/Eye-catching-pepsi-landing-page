let image = document.getElementById('main');
let all = document.body;
let container = document.getElementById('container');
let btn = document.getElementById('btn');
let can1 = document.getElementById('can1');
let can2 = document.getElementById('can2');
let can3 = document.getElementById('can3');
let canT = document.getElementById('canT');
let face = document.getElementById('F');
let insta = document.getElementById('I');
let twiter = document.getElementById('T');
function pepsi(aaa) {
    image.src = aaa;
}
function color(bbb) {
    all.style.background = bbb;
}
function colorc(zzz) {
    container.style.background = zzz;
}

canT.onclick = function(){
   // functions
   pepsi(this.src);
   color('linear-gradient(135deg,#000 20%,#4cb705)')
   colorc('linear-gradient(135deg,#000 20%,#4cb705)')

   // btn fuctions
   btn.onmouseenter = function(){
   btn.style.backgroundColor = '#4cb705';
   btn.style.color = '#000'
} ;
   btn.onmouseleave = function(){
   btn.style.backgroundColor = '#fff';
   btn.style.color = '#000'
}
face.onmouseenter = function(){
   face.style.backgroundColor = '#4cb705';
} ;
face.onmouseleave = function(){
   face.style.removeProperty('background-color');
   
}
insta.onmouseenter = function(){
   insta.style.backgroundColor = '#4cb705';
} ;
insta.onmouseleave = function(){
   insta.style.removeProperty('background-color')
   
}
twiter.onmouseenter = function(){
   twiter.style.backgroundColor = '#4cb705';
} ;
twiter.onmouseleave = function(){
   twiter.style.removeProperty('background-color')
}
}

can1.onclick = function(){
    // functions
    pepsi(this.src);
    color('linear-gradient(135deg,#000 20%,#e3e3e3)')
    colorc(' linear-gradient(135deg,#000 20%,#e3e3e3)')

    // btn fuctions
    btn.onmouseenter = function(){
    btn.style.backgroundColor = '#111';
    btn.style.color = '#fff'
 } ;
    btn.onmouseleave = function(){
    btn.style.backgroundColor = '#fff';
    btn.style.color = '#000'
 }
    
    face.onmouseenter = function(){
    face.style.backgroundColor = '#111';
 } ;
 face.onmouseleave = function(){
    face.style.removeProperty('background-color');
    
 }
 insta.onmouseenter = function(){
    insta.style.backgroundColor = '#111';
 } ;
 insta.onmouseleave = function(){
    insta.style.removeProperty('background-color')
    
 }
 twiter.onmouseenter = function(){
    twiter.style.backgroundColor = '#111';
 } ;
 twiter.onmouseleave = function(){
    twiter.style.removeProperty('background-color')
    
 }
}

can2.onclick = function(){
    // functions
    pepsi(this.src);
    color('linear-gradient(135deg,#071073 20%,#b70514)')
    colorc('linear-gradient(135deg,#071073 20%,#b70514)')

    // btn fuctions
    btn.onmouseenter = function(){
    btn.style.backgroundColor = '#b70514';
    btn.style.color = '#fff'
 } ;
    btn.onmouseleave = function(){
    btn.style.backgroundColor = '#fff';
    btn.style.color = '#000'
 }
 face.onmouseenter = function(){
    face.style.backgroundColor = '#b70514';
 } ;
 face.onmouseleave = function(){
    face.style.removeProperty('background-color');
    
 }
 insta.onmouseenter = function(){
    insta.style.backgroundColor = '#b70514';
 } ;
 insta.onmouseleave = function(){
    insta.style.removeProperty('background-color')
    
 }
 twiter.onmouseenter = function(){
    twiter.style.backgroundColor = '#b70514';
 } ;
 twiter.onmouseleave = function(){
    twiter.style.removeProperty('background-color')
    
 }
}
