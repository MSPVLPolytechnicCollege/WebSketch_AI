var home=document.getElementById("menu1");
var recentes=document.getElementById("menu2");
var myAi=document.getElementById("menu3");
var profile=document.getElementById("menu4");
document.querySelector(".ai").style.display="none";
document.querySelector(".recents").style.display="none";
document.querySelector('.profile').style.display="none";
myAi.addEventListener("click",()=>{
    document.querySelector(".ai").style.display="block";
    document.querySelector(".recents").style.display="none";
    document.querySelector('.profile').style.display="none";
})
recentes.addEventListener("click",()=>{
    document.querySelector(".recents").style.display="block";
    document.querySelector(".ai").style.display="none";
    document.querySelector('.profile').style.display="none";
})
profile.addEventListener("click",()=>{
    document.querySelector(".recents").style.display="none";
    document.querySelector(".ai").style.display="none";
    document.querySelector('.profile').style.display="block";
    document.querySelector('.profile').style.display="flex";
})
