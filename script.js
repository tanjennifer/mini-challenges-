"use strict";

//remove method for #2



//#1 VENDING MACHINE
//selectors & variables
const colaBtn = document.querySelector(".cola");
const peanutsBtn = document.querySelector(".peanuts");
const chocolateBtn = document.querySelector(".chocolate");
const gummiesBtn = document.querySelector(".gummies");
const totalP = document.querySelector("p.total");
let vendingTotal = 0;
console.dir(totalP);

//events
colaBtn.addEventListener("click", ()=> {
    vendingTotal += 2;
    totalP.textContent = `Total: $${vendingTotal}.00`;
});

peanutsBtn.addEventListener("click", ()=> {
    vendingTotal += 2;
    totalP.textContent = `Total: $${vendingTotal}.00`;
});

chocolateBtn.addEventListener("click", ()=> {
    vendingTotal += 2;
    totalP.textContent = `Total: $${vendingTotal}.00`;
});

gummiesBtn.addEventListener("click", ()=> {
    vendingTotal += 2;
    totalP.textContent = `Total: $${vendingTotal}.00`;
});





//#2
// selector & variables


const form = document.querySelector(".main-form");
const coinContainer = document.querySelector(".coin-container");
let totalAmount = 0.0;



form.addEventListener("submit", (e) => {
    e.preventDefault();
    const coinAmount = document.querySelector("#count").value;
    const coinTypeVariable = document.querySelector("#coinType").value;
    let totalAmountElement = document.querySelector("#totalAmount");

    //generating new coins
    for (let i = 0; i < coinAmount; i++) {

        //this is essentially what the Switch statement is doing
        if(coinTypeVariable === "Penny"){
            totalAmount += .01;
        }else if (coinTypeVariable === "Nickel"){
            totalAmount += .05;
        }else if(coinTypeVariable === "Dime"){
            totalAmount += .1;
        } else if(coinTypeVariable === "Quarter"){
            totalAmount += .25;
        }

        totalAmountElement.textContent = "$" + Math.round(totalAmount * 100) / 100;

        // switch(coinTypeVariable){
        //     case "Penny": 
        //         totalAmount += .01;
        //     break;

        //     case "Nickel":
        //         totalAmount += .05;
        //         break;
            
        //     case "Dime":
        //         totalAmount += .1;
        //         break;
            
        //     case "Quarter":
        //         totalAmount += .25;
        //         break;
        // }

        // new HTML section creation
        const newSection = document.createElement("section");

        // text inside coin. Penny, Nickle, Dime, etc.
        newSection.textContent = coinTypeVariable;
        
        // adds class to each Coin created
        newSection.classList.add(coinTypeVariable);
        newSection.classList.add("coin");
        
        // shoves the newSection into the coin container
        coinContainer.append(newSection);


        // event delegate version of on click listener
        // coinContainer.addEventListener("click", () => {
            
        // });


        // add an on-Click eventListener to every Coin we create
        newSection.addEventListener("click", () => {
            // alert("hands off my " + coinTypeVariable);
            newSection.remove();

            switch(coinTypeVariable){
                case "Penny": 
                    totalAmount -= .01;
                break;
    
                case "Nickel":
                    totalAmount -= .05;
                    break;
                
                case "Dime":
                    totalAmount -= .1;
                    break;
                
                case "Quarter":
                    totalAmount -= .25;
                    break;
            }

            totalAmountElement.textContent = "$" + Math.round(totalAmount * 100) / 100;

        });
    }
});






//3.
// selectors & variables:
const onButton = document.querySelector(".on");
const offButton = document.querySelector(".off");
const toggleButton = document.querySelector(".toggle");
const endButton = document.querySelector(".end");
// const allButton = document.querySelector(".buttons");
const lightBulb = document.querySelector(".light-bulb");


// EVENTS:
onButton.addEventListener("click", () => {
  lightBulb.style.backgroundColor = "#c5cedb";
});
offButton.addEventListener("click", () => {
  lightBulb.style.backgroundColor = "#595857";
});
toggleButton.addEventListener("click", () => {
  if (lightBulb.style.backgroundColor === "rgb(197, 206, 219)") {
    lightBulb.style.backgroundColor = "#595857";
  } else {
    lightBulb.style.backgroundColor = "#c5cedb ";
  }
});
endButton.addEventListener("click", () => {
  lightBulb.remove();
  endButton.disabled = true;
  toggleButton.disabled = true;
  offButton.disabled = true;
  onButton.disabled = true;
});







