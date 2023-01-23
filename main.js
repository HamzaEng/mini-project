let btn = document.getElementById("btn");
let text =document.getElementById("text");

let btnPosition = 0;

btn.addEventListener("click", ()=>{
    if(btnPosition == 0){
        btn.style.transform = "rotate(90deg)";
        text.style.opacity = "1";
        btnPosition = 1;
    }
    else{
        text.style.opacity = "0";
        btn.style.transform = "rotate(0)";
        btnPosition = 0;
    }
})