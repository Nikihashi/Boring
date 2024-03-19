let url ="https://www.boredapi.com/api/activity";

fetch(url)
.then (function (response){
    return response.json();
})
.then (data =>{
const boring = {
    activity: data.activity,
    type: data.type,
}


Start(boring);
})

let container = document.querySelector(".container");
let activity = document.querySelector(".heading");
let type = document.querySelector(".heading2");
let button = document.querySelector(".Boring");

let arr = ["1","2","3","4","5","6","7","8", "9", "0", "A", "B", "C", "D", "E", "F"];
let colorCode ="#";
for(let i=0; i<6; i++){
let random = Math.floor(Math.random()*16);

 colorCode += (arr[random]);
 
}



function Start(boring){
    activity.innerText = `Bored? => ${boring.activity}`;
    activity.style.color  = `${colorCode}`;
    container.style.borderColor = activity.style.color;
    button.style.borderColor = activity.style.color;
    button.style.background =`linear-gradient(to right, ${activity.style.color}, white)` ;
    type.innerText = `~ ${boring.type}`; 
}

button.addEventListener("click", function(){
    window.location.reload();
} );



