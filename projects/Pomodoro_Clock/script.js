let canPlay = "yes";
let canSet = "yes";

//Setting Session Time

document.getElementById("session-up-arrow").addEventListener("click",function(){
    if(canSet == "yes"){
    let sessionSetNum = document.getElementById("session-set-number").textContent;
    sessionSetNum = parseInt(sessionSetNum);
    if(sessionSetNum == 60){
        return sessionSetNum;
    }
    sessionSetNum ++;
    document.getElementById("session-set-number").textContent = sessionSetNum;
    if(sessionSetNum > 9)
    document.getElementById("time").textContent = sessionSetNum + ":00";
    else
    document.getElementById("time").textContent = "0" + sessionSetNum + ":00";
    }
});

document.getElementById("session-down-arrow").addEventListener("click",function(){
    if(canSet == "yes"){
    let sessionSetNum = document.getElementById("session-set-number").textContent;
    sessionSetNum = parseInt(sessionSetNum);
    if(sessionSetNum == 1){
        return sessionSetNum;
    }
    sessionSetNum --;
    document.getElementById("session-set-number").textContent = sessionSetNum;
    if(sessionSetNum > 9)
    document.getElementById("time").textContent = sessionSetNum + ":00";
    else
    document.getElementById("time").textContent = "0" + sessionSetNum + ":00";
    }
});

//Setting Break Time

document.getElementById("break-up-arrow").addEventListener("click",function(){
    if(canSet == "yes"){
    let breakSetNum = document.getElementById("break-set-number").textContent;
    breakSetNum = parseInt(breakSetNum);
    if(breakSetNum == 60){
        return breakSetNum;
    }
    breakSetNum ++;
    document.getElementById("break-set-number").textContent = breakSetNum;
    }
});

document.getElementById("break-down-arrow").addEventListener("click",function(){
    if(canSet == "yes"){
    let breakSetNum = document.getElementById("break-set-number").textContent;
    breakSetNum = parseInt(breakSetNum);
    if(breakSetNum == 1){
        return breakSetNum;
    }
    breakSetNum --;
    document.getElementById("break-set-number").textContent = breakSetNum;
    }
});

//Timer

let paused = "no";
let min = 0;
let sec = 0;

function timer(){
    if(canPlay == "yes"){
    canPlay = "no";
    canSet = "no";
    paused = "no";
    let starter = document.getElementById("session-set-number").textContent;
    starter = parseInt(starter);
    let heading = document.getElementById("session-break").textContent.trim();
    let time = document.getElementById("time").textContent.split(":");
    min = time[0];
    sec = 60;
    min = parseInt(min);
    if(parseInt(time[1]) > 0){
        sec = parseInt(time[1]);
    }
    if(min == starter && sec == 60)
    min --;
    let timer = setInterval(function(){
        if(paused == "yes"){
            clearInterval(timer);
            return;
        }
        sec--;
        if(sec < 10 && min > 9){
            document.getElementById("time").textContent = min + ":" + "0" + sec;
        } else if(min < 10 && sec > 9)
        document.getElementById("time").textContent = "0" + min + ":" + sec;
        else if(sec < 10 && min < 10)
        document.getElementById("time").textContent = "0" + min + ":" + "0" + sec;
        else
        document.getElementById("time").textContent = min + ":" + sec;
        if(sec == 00){
            min--;
            sec = 60;
        }
            if(min < 0 && heading === "Break"){
                min = document.getElementById("session-set-number").textContent;
                min = parseInt(min) - 1;
                sec = 60;
                document.getElementById("session-break").textContent = "Session";
            } else if(min < 0 && heading === "Session"){
                min = document.getElementById("break-set-number").textContent;
                min = parseInt(min) - 1;
                sec = 60;
                document.getElementById("session-break").textContent = "Break";
                }
                heading = document.getElementById("session-break").textContent.trim();
    },1000);
    }
};

//

//Buttons

document.getElementById("play").addEventListener("click",timer);

document.getElementById("pause").addEventListener("click",function(){
    canPlay = "yes";
    paused = "yes";
});

document.getElementById("stop").addEventListener("click",function(){
    let stopTime = document.getElementById("session-set-number").textContent;
    paused = "yes";
    canSet = "yes";
    canPlay = "yes";
    document.getElementById("time").textContent = stopTime + ":00";
});

document.getElementById("refresh").addEventListener("click",function(){
    paused = "yes";
    canSet = "yes";
    canPlay = "yes";
    document.getElementById("session-break").textContent = "Session";
    document.getElementById("session-set-number").textContent = "25";
    document.getElementById("break-set-number").textContent = "5";
    document.getElementById("time").textContent = "25:00";
});
