pl1 = 0;
pl2 = 1;

let ob = 10; // Obergrenze

let points = 0;

let currentPlayer = 0;

let players = JSON.parse(localStorage['players'] ?? []);
console.log(players) 
beforeGame()
let countPoints = 0;
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
    
    document.getElementById('rechnung').innerHTML = `<p> ${nr1} ${operator} ${nr2} </p>`;
}




function beforeGame() {
    
    if(currentPlayer < 2) {
    document.getElementById('currentPLayer').innerHTML = `<h3> ${players[currentPlayer].name} is current Player </h3>`
    }
    
    console.log("test")
    document.getElementById('countgame-Main').style.display = "none";
    document.getElementById('startGame').innerHTML = `<div onclick = "Main()"> <h1> Start Game </h1> </div>`

    if(currentPlayer == 2) {
        endGame();
    }

}

function endGame() {
    let winner = "";

    document.getElementById('countgame-Main').style.display = "none";
    if(players[pl1].points != players[pl2].points) {

        if(players[pl1].points > players[pl2].points) {
            localStorage['victorys'][pl1] += JSON.stringify('{"name": "Countgame"}')
            winner = players[pl1].name;
        } else {
            localStorage['victorys'][pl2] += JSON.stringify('{"name": "Countgame"}')
            winner = players[pl2].name;
        }
        document.getElementById('points').innerHTML = `<p> ${players[pl1].name} - ${players[pl1].points} : ${players[pl2].points} - ${players[pl2].name} </p>`
    document.getElementById('winner').innerHTML = `<p> ${winner} hat gewonnen </p>`;
   
    } else {    
        document.getElementById('winner').innerHTML = "<p> Draw </p>"
    }   
    document.getElementById('end').style.display = "grid";
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

            

          answer =  nr1 / nr2;
          answer = answer.toFixed(2)
          break;
    }

    return answer;
}


function startGame() {
   
    Main();
}

let timer = false;
function Main() {

   
    
    document.getElementById('countgame-Main').style.display = "grid";
    let timerValue = 10;
   
    document.getElementById('timer').innerHTML = `<p> Time: ${timerValue} </p>`;
   
    const intervalTimer = setInterval(() => {
        console.log("Counter " + timerValue)
        
        if(timerValue <= 0) {
            currentPlayer++;
            beforeGame();
            
            console.log("Countdown finished");
            clearInterval(intervalTimer);
        }
        
        timerValue--
        document.getElementById('timer').innerHTML = `<p> Time: ${timerValue} </p>`;
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
        nr1 = getrndNr(answer + 10);
    }while (nr1 == answer);

    
    do {
        nr2 = getrndNr(answer + 10);
    }while (nr2 == nr1 && nr2 == answer);
    

    


    console.log(nr1 ,nr2)
    switch(rnd) {
        case 1:
       /*     
        brick = `<div id = "anwnsers">`;
        for(let i = 0; i < 3; i++) {
            brick += `<div class = "options" onclick = "checkAnwser(${answer},${möglichkeit1[i]}, ${intervalTimer}, ${i},${0})"> <p> ${möglichkeit1[i]} </p> </div>`
        }
        brick += `</div>`
        */
            
            brick = `<div id = "anwnsers">
                   <div class = "options" onclick = "checkAnwser(${answer},${answer}, ${intervalTimer}, ${0},${0})"> <p> ${answer} </p> </div>
                   <div class = "options" onclick = "checkAnwser(${answer}, ${nr1}, ${intervalTimer}, ${1}, ${0})"><p>${nr1}</p></div>
                   <div class = "options" onclick = "checkAnwser(${answer}, ${nr2}, ${intervalTimer}, ${2}, ${0})"><p> ${nr2}</p></div>
                </div>`
            
            break;
        
            case 2:
                /*
                brick = `<div id = "anwnsers">`;

                for(let i = 0; i < 3; i++) {
                    brick += `<div class = "options" onclick = "checkAnwser(${answer},${möglichkeit2[i]}, ${intervalTimer}, ${i},${1})"> <p> ${möglichkeit2[i]} </p> </div>`
                }
                brick += `</div>`
                */
               
               brick = `<div id = "anwnsers">
                   <div class = "options" onclick = "checkAnwser(${answer}, ${nr1}, ${intervalTimer}, ${0},${1})"><p>${nr1}</p></div>
                   <div class = "options" onclick = "checkAnwser(${answer}, ${answer}, ${intervalTimer}, ${1},${1})"><p>${answer}</p></div>
                  <div class = "options" onclick = "checkAnwser(${answer}, ${nr2}, ${intervalTimer},${2},${1})"><p>${nr2}</p></div>
                </div>`
                
            break;
            case 3:
                /*
                brick = `<div id = "anwnsers">`;
                for(let i = 0; i < 3; i++) {
                    brick += `<div class = "options" onclick = "checkAnwser(${answer},${möglichkeit1[i]}, ${intervalTimer}, ${i},${2})"> <p> ${möglichkeit3[i]} </p> </div>`
                }
                brick += `</div>`
                */
                brick = `<div id = "anwnsers">
                    <div class = "options" onclick = "checkAnwser(${answer}, ${nr1}, ${intervalTimer},${0},${2})"><p>${nr1}</p></div>
                    <div class = "options" onclick = "checkAnwser(${answer}, ${nr2}, ${intervalTimer}, ${1},${2})"><p>${nr2}</p></div>
                    <div class = "options" onclick = "checkAnwser(${answer}, ${answer}, ${intervalTimer},${2},${2})"><p>${answer}</p></div>
                </div>`
                
                
    }   
    
    
    document.getElementById('eingabe').innerHTML = brick;
}


function checkAnwser(answer, userAnswer, intervalTimer, used, right) {
    
    
        if(used == right) {
           let audio = new Audio("../../rightanswer-95219.mp3")
           audio.play();
        }
  
    

    
    console.log(Number.parseInt(userAnswer), Number.parseInt(answer))
    if(Number.parseInt(answer) == Number.parseInt(userAnswer)) {
        console.log("richtig")
        countPoints++;
        players[currentPlayer].points = countPoints;
        clearInterval(intervalTimer);
        Main();
    } else {
        clearInterval(intervalTimer);
        console.log('falsch')
        
    
        currentPlayer++;
        if(currentPlayer <= 1) {
            beforeGame();
        } else {
            endGame();
        }
        
    }
}