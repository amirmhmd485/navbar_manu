// code 
const icon = document.getElementById("icon");
const ul = document.querySelector("ul");
let isOpen = true;
function openNavBar(){
    if(isOpen){
        ul.style.height = '215px';
        isOpen = false;
    }
    else{
        ul.style.height = '0';
        isOpen = true;
    }
}
icon.addEventListener("click" , openNavBar);