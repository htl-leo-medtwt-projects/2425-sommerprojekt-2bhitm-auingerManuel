beforeGame()

let ob = 10; // Obergrenze

let points = 0;


function getrndNr(ob) {
    let rnd = Math.ceil(Math.random() * ob) + 1;
    return rnd;
}


function rndOperator() {
    let rnd = Math.ceil(Math.random() * 4);

    switch(rnd) {
        case 1:
            return "+";
            
        case 2:
            return "-";
            
        case 3:
            return "*";
        case 4:
            return "/";
    }
}


function print(nr1, operator, nr2) {
    
    document.getElementById('rechnung').innerHTML = `${nr1} ${operator} ${nr2}`;
}




function beforeGame() {
    document.getElementById('rechnung').innerHTML = "";
    document.getElementById('eingabe').innerHTML = "";
    document.getElementById('startGame').innerHTML = `<div onclick = "Main()"> <h1> Start Game </h1> </div>`

}

function getAnswer(nr1, operator, nr2) {
    let answer = 0;
    switch(operator) {
        case "+":
          answer =  nr1 + nr2;
            break;
        case "-":
          answer =  nr1 - nr2;
            break;
        case "*":
          answer =  nr1 * nr2;
            break;
        case "/":

            if(n1 < n2) {
                let temp = n1;
                n1 = n2;
                n2 = temp;
            }

          answer =  nr1 / nr2;
          answer = answer.toFixed(2)
          break;
    }

    return answer;
}


function startGame() {
   
    Main();
}


function Main() {
   let timerValue = 30;
    const intervalTimer = setInterval(() => {
        console.log("Counter " + timerValue)
        
        if(timerValue < 0) {
            beforeGame();
            console.log("Countdown finished");
            clearInterval(intervalTimer);
        }
        timerValue--
       }, 1000)

   
    let nr1 = getrndNr(ob);
    let operator = rndOperator();
    let nr2 = getrndNr(ob);
    let answer = getAnswer(nr1, operator, nr2)
    print(nr1, operator, nr2);
    
    antworten(answer, intervalTimer);
    
}

function antworten(answer, intervalTimer) {

    let rnd =  Math.ceil(Math.random() * 3);
    
    let brick = "";
    
    let nr1 = 0;
    let nr2 = 0;

    do {
        nr1 = getrndNr(answer);
    }while (nr1 == answer);

    
    do {
        nr2 = getrndNr(answer);
    }while (nr2 == nr1);

    console.log(nr1 ,nr2)
    switch(rnd) {
        case 1:
            brick = `<div id = "anwnsers">
                   <div class = "options" onclick = "checkAnwser(${answer},${answer}, ${intervalTimer} )"> ${answer} </div>
                   <div class = "options" onclick = "checkAnwser(${answer}, ${nr1}, ${intervalTimer})">${nr1}</div>
                   <div class = "options" onclick = "checkAnwser(${answer}, ${nr2}, ${intervalTimer})"> ${nr2} </div>
                </div>`
            break;
        
            case 2:
               brick = `<div id = "anwnsers">
                   <div class = "options" onclick = "checkAnwser(${answer}, ${nr1}, ${intervalTimer})"> ${nr1} </div>
                   <div class = "options" onclick = "checkAnwser(${answer}, ${answer}, ${intervalTimer})"> ${answer} </div>
                  <div class = "options" onclick = "checkAnwser(${answer}, ${nr2}, ${intervalTimer})">${nr2} </div>
                </div>`
            break;
            case 3:
                brick = `<div id = "anwnsers">
                    <div class = "options" onclick = "checkAnwser(${answer}, ${nr1}, ${intervalTimer})"> ${nr1} </div>
                    <div class = "options" onclick = "checkAnwser(${answer}, ${nr2}, ${intervalTimer})"> ${nr2} </div>
                    <div class = "options" onclick = "checkAnwser(${answer}, ${answer}, ${intervalTimer})"> ${answer} </div>
                </div>`
                
    }   
    
    
    document.getElementById('eingabe').innerHTML = brick;
}


function checkAnwser(answer, userAnswer, intervalTimer) {
    
    
    console.log(Number.parseInt(userAnswer), Number.parseInt(answer))
    if(Number.parseInt(answer) == userAnswer) {
        console.log("richtig")
        clearInterval(intervalTimer);
        Main();
    } else {
        console.log('falsch')
    }
}