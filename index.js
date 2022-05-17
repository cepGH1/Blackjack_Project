'use strict'
const saveElement = document.getElementById("draw-button");
let header = document.querySelector("h1");
const totalHeld = document.querySelector("#total-held");

const drawButton = document.querySelector("#save-button");
const testDiv = document.querySelector("#test");
const startButton = document.querySelector("#start-button");
const restartButton = document.querySelector("#restart-button");


drawButton.addEventListener("click", render);
//startButton.addEventListener("click", start);
//but1.addEventListener("click", render);
restartButton.addEventListener("click", refresh);

let handValues =[];
let total = 0;

function render() {
   //testDiv.innerHTML = "hello world";
   let value = Math.floor((Math.random() * 13) + 1);

   let output = "number is " + value;

   
   handValues.push(value);
   total = total + value;
   if(total >21){
       totalHeld.innerHTML = "You've gone Bust";
   }
   else{
   totalHeld.innerHTML = "Your hand total is : " + total;
   }
   
        let newRow = document.createElement("tr");
        let newCell = document.createElement("td");
        let newEntry = document.createTextNode(value);
        newCell.appendChild(newEntry);
        newRow.appendChild(newCell);
        document.getElementById("table1").appendChild(newRow)
    

   //console.log(value);
   //header.innerText = value;
   
   

    //var newRow = document.createElement("tr");
    //var newCell = document.createElement("td");
   // newCell.innerHTML = value;
    //newRow.append(newCell);
    //document.getElementById("rows").appendChild(newRow);
}

function totalInHand(){
    for (let i=0; i<handValues.length; i++){
        let total = total + handValues[i];
    }
    totalHeld.value = total;
}

function refresh(){

    window.location.reload();

}
function restart(){

}

function start(){
    but1 = document.createElement("button");
    let buttonMessage1 = document.createTextNode("draw");
    but1.appendChild(buttonMessage1);
    testDiv.appendChild(but1);
    let but2 = document.createElement("button");
    let buttonMessage2 = document.createTextNode("stick");
    but2.appendChild(buttonMessage2);
    testDiv.appendChild(but2);
    let but3 = document.createElement("button");
    let buttonMessage3 = document.createTextNode("redeal");
    but3.appendChild(buttonMessage3);
    testDiv.appendChild(but3);
}

/*blackjack logic
when you click the draw button it displays the card/number you drawed
A second function that adds up all the numbers from the first function and prints out bust below 21

funciton draw() {
    let value = Math.floor((Math.random() * 21) + 1);
    console.log(value);
    return value;

}


*/