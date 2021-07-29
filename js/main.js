'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
let next;
let prev;
let play;
let random;
let state;
let slides;
let icon;
/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function refresh()
{
    document.querySelector('.slider-figure.active').classList.remove("active")
    slides[state.index].classList.add('active')
}


function onClickNext()
{
    state.index++
    if(state.index == slides.length)
    state.index = 0

    refresh()

}

function onClickPrev()
{
    state.index--
    if(state.index == -1)
    state.index = slides.length-1
    refresh()

}

function onClickPlay()
{
    icon.classList.toggle('fa-play')
    icon.classList.toggle('fa-pause')
    if(state.timer==null)
    {
        state.timer=setInterval(onClickNext,1000)
        document.querySelector("#play-pause").title = 'Arreter diaporama'
    }
    else
    {
        clearInterval(state.timer)
        state.timer=null
        document.querySelector("#play-pause").title = 'Commencer diaporama'
    }

}

function onClickRandom()
{
    do
    {
        let r = getRandomInteger(0, slides.length-1)
    }
   
    
    while(r==state.index)
    
    state.index=r
    refresh()

}

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
slides=document.querySelectorAll('.slider-figure')
icon=document.querySelector('.fas.fa-play');



state={}
state.index=0;
state.timer=null;

next=document.querySelector("#next");
prev=document.querySelector("#prev");
play=document.querySelector("#play-pause");
random=document.querySelector("#random");

next.addEventListener('click',onClickNext)
prev.addEventListener('click',onClickPrev)
play.addEventListener('click',onClickPlay)
random.addEventListener('click',onClickRandom)

onClickNext()