var color1 = document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradiant");
var h4= document.querySelector("h4");

function changeBackground(){
    body.style.background ="linear-gradient(to right,"+color1.value+
    ","
    +color2.value
    +")";
  h4.textContent = body.style.background + ";";
}

color1.addEventListener("input",changeBackground);
    
color2.addEventListener("input",changeBackground);
   

