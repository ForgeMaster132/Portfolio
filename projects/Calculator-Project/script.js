// Functions

function add(num1,num2){
    let answer = parseFloat(num1) + parseFloat(num2);
    return answer;
}

function subtract(num1,num2){
    let answer = parseFloat(num1) - parseFloat(num2);
    return answer;
}

function multiply(num1,num2){
    let answer = parseFloat(num1) * parseFloat(num2);
    return answer;
}

function divide(num1,num2){
    let answer = parseFloat(num1) / parseFloat(num2);
    return answer;
}


function operate(){
    const display = document.getElementById("display");
    let expression = display.textContent;

    // Replace the visual multiply sign with an actual operator
    expression = expression.replace(/x/g, "*");

    try {
        // Use a Function constructor instead of eval for slightly safer evaluation
        const result = Function(`"use strict"; return (${expression})`)();

        if (isNaN(result) || !isFinite(result)) {
            display.textContent = "Error";
        } else {
            display.textContent = result;
        }
    } catch (e) {
        display.textContent = "Error";
    }
}

// Buttons

let sizeLength = [13, 17, 22, 30, 36];
let sizeFontSize = ["2.5rem", "2rem", "1.5rem", "1.3rem", "1rem"];
let sizeFontHeight = ["4rem", "3.5rem", "3rem", "2.5rem", "2rem"];

for(let i = 0; i < 10; i++){
    document.getElementById(i).addEventListener("click",function(){
        for(let i = 0;i < 5;i++){
        if(document.getElementById("display").textContent.length > sizeLength[i]){
            document.getElementById("display").style.fontSize = sizeFontSize[i];
            document.getElementById("display").style.height = sizeFontHeight[i];
            }
        }
        if(document.getElementById("display").textContent == "0"){
            document.getElementById("display").textContent = i;
        } else
            document.getElementById("display").textContent = document.getElementById("display").textContent + i;
    });
}

let operators= ["+","-","x","/"];
for(let i = 0; operators.length > i; i++){
    document.getElementById(operators[i]).addEventListener("click",function(){
         for(let i = 0;i < 5;i++){
        if(document.getElementById("display").textContent.length > sizeLength[i]){
            document.getElementById("display").style.fontSize = sizeFontSize[i];
            document.getElementById("display").style.height = sizeFontHeight[i];
            }
        }
        if(document.getElementById("display").textContent == "0")
            document.getElementById("display").textContent = "";
        document.getElementById("display").textContent = document.getElementById("display").textContent + operators[i];
    });
}

document.getElementById("=").addEventListener("click",operate);
document.getElementById("=").addEventListener("click",function(){
     for(let i = 0;i < 5;i++){
        if(document.getElementById("display").textContent.length > sizeLength[i]){
            document.getElementById("display").style.fontSize = sizeFontSize[i];
            document.getElementById("display").style.height = sizeFontHeight[i];
            }
        }
});

    document.getElementById("clear").addEventListener("click",function(){
    document.getElementById("display").style.fontSize = "3rem";
    document.getElementById("display").style.height = "4rem";
    document.getElementById("display").textContent = "0";
});

