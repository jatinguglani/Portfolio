// /*-------------smooth scrool------------------------ */
// var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');

// function scroll(event){
//     event.preventDefault();
//     var target = this.textContent.trim().toLowerCase();
//     var targety = document.getElementById(target);
//     console.log(targety);
//     var scroolInterval = setInterval(function(){
//                             var coordinates = targety.getBoundingClientRect();
//                             console.log(coordinates.top);
//                             if(coordinates.top<=0){
//                                 clearInterval(scroolInterval);
//                                 return;
//                             }
//                             window.scrollBy(0, 50);
//                         }, 20);
// }

// for(var i=0; i<navMenuAnchorTags.length; i++)
// {
//     navMenuAnchorTags[i].addEventListener('click',scroll);
// }
/*----------------------skill animation------------------------------ */

var skillProgress = document.querySelectorAll('.skills-progress > div');
var skillContainer = document.getElementsByClassName('skills-display');
window.addEventListener('scroll',checkScroll);
var animationDone = false;

function initialiseBars(){
    for(let bar of skillProgress){
        bar.style.width = 0+'%';
    }
}
initialiseBars();

function fillBars(){
    for(let bar of skillProgress){
        var target = 80;
        var current = 0;
        var interval = setInterval(function() {
                            if(current > target)
                            {
                                clearInterval(interval);
                                return;
                            }
                            current++;
                            bar.style.width = current + '%';
                        }, 100);
    }
}

function checkScroll(){
    var coordinates = skillContainer[0].getBoundingClientRect();

    if(!animationDone && coordinates.top <= window.innerHeight)
    {
        animationDone = true;
        fillBars();
    }
    else if(coordinates.top > window.innerHeight){
        animationDone = false;
        initialiseBars();
    }
}
/*------------------------------------------------------------------- */
