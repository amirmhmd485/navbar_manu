// code 
const icon = document.getElementById("icon");
const ul = document.querySelector("ul");
let isOpen = true;
function openNavBar(){
    if(isOpen){
        ul.style.height = 'auto';
        isOpen = false;
    }
    else{
        ul.style.height = '0';
        isOpen = true;
        window.addEventListener("resize" ,function(e){
            ul.style.height = "auto";
        })
    }
}

icon.addEventListener("click" , openNavBar);