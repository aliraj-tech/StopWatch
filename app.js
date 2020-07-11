



var min=0
var sec=0
var milsec=0

var milHeading=document.getElementById('mil')
var secHeading=document.getElementById('sec')
var minHeading=document.getElementById('min')

var interval;

function timer(){

    milsec++
    milHeading.innerHTML=milsec

    if (milsec>=100){

        sec++
        secHeading.innerHTML=sec
        milsec=0
    }
    else if ( sec >=60) {

        min++
        
        minHeading.innerHTML=min
        sec=0

    }


}
function start(button){
interval=setInterval(timer,10)
document.getElementById("start").disabled = true;
document.getElementById("start1").disabled = true;

}

function stop()
{
clearInterval(interval)
document.getElementById("start").disabled = false;
document.getElementById("start1").disabled = false;

}



function reset(){
    min=0
    sec=0
    milsec=00
    milHeading.innerHTML=milsec
    secHeading.innerHTML=sec
    minHeading.innerHTML=min
    clearInterval(interval)





}

