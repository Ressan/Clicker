console.log('Hello');
console.error('World');
console.warn('!');


let minute = 0;
let second = 29;
let millisecond = 1000;
let hour = 0;

let cron;

let cpt = 0;
let firstclick = true;
let play = true;
let longueur = window.outerHeight;
let largeur = window.outerWidth;
console.log("h:",longueur,"w:",largeur);


//let timer = document.querySelector("#timer");
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
            start();
            firstclick =false;
        }    
        console.warn("Oh le click!");
        cpt +=1;
        let nx = Math.floor((Math.random() * (500-125))+125);
        let ny = Math.floor((Math.random() * (1000-125))+125);
        
        event.target.style.top = nx + "px";
        event.target.style.left = ny + "px";
        console.log("click box 2:",cpt,"\nNew Coo: x",nx,"y",ny);
        document.getElementById('nbClick').innerText = returnData(cpt);
    }


})



const rejouer = () => {
    //On rejoue (en rafraichissant la page)
    document.location.reload(false);
}

function pause() {
    clearInterval(cron);
}

function start() {
    pause();
    cron = setInterval(() => { timer(); }, 10);
}

function timer() {
    if ((millisecond -= 10) == 0 && second != 0) {
        millisecond = 1000;
        second--;
    }
    if (second == 0 && minute != 0) {
        second = 60;
        minute--;
    }
    if (minute == 00 && hour!= 0) {
        minute = 60;
        hour--;
    }

    if(endTimer() == true)
    {
        console.log('EndTimer');
        pause();
        play = false;
        console.log('test');
        document.querySelector("#minute").style.color = "orangered";
        document.querySelector("#second").style.color = "orangered";
        document.querySelector("#millisecond").style.color = "orangered";
        document.querySelector('#compteur').style.color = "turquoise";
        document.querySelector('#compteur').style.fontSize = "30px";
    }

    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerText = returnData(millisecond);
}

function endTimer()
{
    let fin = false;
    if(hour == 0 && minute == 0 && second == 0 && millisecond == 0)
    {
        fin = true;
    }
    return fin;
}

function returnData(input) {
    return input > 10 ? input : `${input}`
}
