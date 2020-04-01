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

function firstNumBig(numberSize,problem,i){
    let size = "";
                let j = numberSize;
                while(j > 0){
                    size += problem[i - j];
                    j--;
                }
    return size;
}

function nextNumBigCheck(problem,i){
    let count = 0;
    let k = i + 1;
    for(let j = k ;j < problem.length; j++){
        if((problem[j] == "+") || (problem[j] == "-") || (problem[j] == "/") || (problem[j] == "x")){
            return count;
        }
        count++;
    }
    return count;
}

function nextNumBig(problem,i,count){
    let size = "";
                let j = count;
                let k = 1;
                while(j > 0){
                    size += problem[i + k];
                    j--;
                    k++;
                }
    return size;
}

function operate(){
    let problem = document.getElementById("display").textContent.split("");
    let answer = 0;
    let num2 = 0;
    let size2 = 0;
    let num1 = nextNumBigCheck(problem,-1);
    let size = nextNumBig(problem,-1,num1);
    answer = size;
    for(let i = 0;i < problem.length;i++){
       if(problem[i] == "+"){
                num2 = nextNumBigCheck(problem,i);
                size2 = nextNumBig(problem,i,num2);
                    answer = add(answer,size2);
                    numberSize = 0;
        } else if(problem[i] == "-"){
                num2 = nextNumBigCheck(problem,i);
                size2 = nextNumBig(problem,i,num2);
                    answer = subtract(answer,size2);
                    numberSize = 0;
        } else if(problem[i] == "x"){
                num2 = nextNumBigCheck(problem,i);
                size2 = nextNumBig(problem,i,num2);
                    answer = multiply(answer,size2);
                    numberSize = 0;
        } else if(problem[i] == "/"){
                num2 = nextNumBigCheck(problem,i);
                size2 = nextNumBig(problem,i,num2);
                    answer = divide(answer,size2);
                    numberSize = 0;
        }
    }
    document.getElementById("display").textContent = answer;
}

// Buttons

let sizeLength = [13,17,22,30,36];
let sizeFontSize = ["250%","200%","150%","130%","100%"];
let sizeFontHeight = ["7%","6%","5%","4%","3%"];

for(let i = 0; i < 10; i++){
    document.getElementById(i).addEventListener("click",function(){
        for(let i = 0;i < 5;i++){
        if(document.getElementById("display").textContent.length > sizeLength[i]){
            document.getElementById("display").style.fontSize = sizeFontSize[i];
            document.getElementById("display").style.height = sizeFontHeight[i];
            }
        }
        if(document.getElementById("display").textContent == "Calculator"){
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
        if(document.getElementById("display").textContent == "Calculator")
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
    document.getElementById("display").style.fontSize = "300%";
    document.getElementById("display").style.height = "10%";
    document.getElementById("display").textContent = "Calculator";
});

