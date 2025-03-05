const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myButton = document.getElementById("myButton");
let randomNum1;
let randomNum2;
let min = 1;
let max = 6;
let min2 = 1;
let max2 = 6;

myButton.onclick = function() {

    randomNum1 = Math.floor(Math.random() * max) + min;

    myLabel1.textContent = randomNum1;

    randomNum2 = Math.floor(Math.random() * max2) + min2;
    
    myLabel2.textContent = randomNum2;
    
}