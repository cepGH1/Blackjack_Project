'use strict'
const saveElement = document.getElementById("draw-button");
let header = document.querySelector("h1");
const totalHeld = document.querySelector("#total-held");

const drawButton = document.querySelector("#save-button");
const testDiv = document.querySelector("#test");
const startButton = document.querySelector("#start-button");

startButton.addEventListener("click", start);
drawButton.addEventListener("click", render);
let handValues =[];
let total = 0;

function render() {
   //testDiv.innerHTML = "hello world";
   let value = Math.floor((Math.random() * 13) + 1);

   let output = "number is " + value;
   alert(output);

   
   handValues.push(value);
   total = total + value;
   if(total >21){
       totalHeld.innerHTML = "Bust";
   }
   else{
   totalHeld.innerHTML = total;
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

function restart(){

}

function start(){
    let but1 = document.createElement("button");
    let buttonMessage1 = document.createTextNode("draw");
    but1.appendChild(buttonMessage1);
    divTest.innerHTML = "hello world";
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