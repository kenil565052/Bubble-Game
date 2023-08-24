var timer=60;
var score =0;
var hitrn=0;
function increasescore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
function getnewhit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}
function makebubble(){
    
var clutter="";
for(var i=1;i<=102;i++){
    var rn= Math.floor(Math.random()*10)
    clutter+=`<div class="bubble">${rn}</div>`;
    
    
    // console.log(clutter);
}
document.querySelector("#pbtm").innerHTML=clutter;
}

function runtimer(){
var timerinteval=setInterval(function(){
        if(timer>0){

            timer--;
            document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerinteval);
            document.querySelector("#pbtm").innerHTML=`Game Over!!`;
        }
    },1000);
}
document.querySelector("#pbtm")
.addEventListener("click",function(dets){
   var clickednumber=(Number(dets.target.textContent));    
    if(clickednumber===hitrn){
        increasescore();
        makebubble();
        getnewhit();
    }
})
runtimer();
makebubble();
getnewhit();



