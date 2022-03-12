console.log('Hello');
console.error('World');
console.warn('!');

let cpt = 0;
let chronos = 10;
let firstclick = true;
let play = true;
let longueur = window.outerHeight;
let largeur = window.outerWidth;
console.log("h:",longueur,"w:",largeur);


let timer = document.querySelector("#timer");
/*
let timer = document.querySelector(".timer");
*/


//Changement du fond de la box 2
let box2 = document.querySelector(".box2");
box2.style.background = "grey";


//Changement de couleurs des textes dans chaque boxes
let boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
    box.style.color = "white"
});

box2.addEventListener('click', (event) =>{

    if (play) {        
        if (firstclick) {    
            console.warn("Oh le click!");
            cpt +=1;
            let nx = Math.floor((Math.random() * (largeur))-125);
            let ny = Math.floor((Math.random() * (longueur))-125);
            
            //for(i = box2.get)
            event.target.style.top = nx + "px";
            event.target.style.left = ny + "px";
            
            console.log("click box 2:",cpt,"\nNew Coo: x",nx,"y",ny);
        }
    }


})

function setTime(){
    if(play) {
        if(firstclick)
        { timer.style.textShadow = "0px 0px 10px whitesmoke";  }
        chronos--;
        if(chronos <=0)
        {play = false;}
        document.querySelector('.timer')
    }
}

