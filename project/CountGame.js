startGame()

let ob = 10; // Obergrenze


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




function startGame() {
    document.getElementById('startGame').innerHTML = `<div onclick = "Main()"> Start Game </div>`

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


function Main() {
    let nr1 = getrndNr(ob);
    let operator = rndOperator();
    let nr2 = getrndNr(ob);
    let answer = getAnswer(nr1, operator, nr2)
    print(nr1, operator, nr2);
    
    antworten(answer);
}






function antworten(answer) {

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
                   <div class = "options" onclick = "checkAnwser(${answer},${answer} )"> ${answer} </div>
                   <div class = "options" onclick = "checkAnwser(${answer}, ${nr1})">${nr1}</div>
                   <div class = "options" onclick = "checkAnwser(${answer}, ${nr2})"> ${nr2} </div>
                </div>`
            break;
        
            case 2:
               brick = `<div id = "anwnsers">
                   <div class = "options" onclick = "checkAnwser(${answer}, ${nr1})"> ${nr1} </div>
                   <div class = "options" onclick = "checkAnwser(${answer}, ${answer})"> ${answer} </div>
                  <div class = "options" onclick = "checkAnwser(${answer}, ${nr2})">${nr2} </div>
                </div>`
            break;
            case 3:
                brick = `<div id = "anwnsers">
                    <div class = "options" onclick = "checkAnwser(${answer}, ${nr1})"> ${nr1} </div>
                    <div class = "options" onclick = "checkAnwser(${answer}, ${nr2})"> ${nr2} </div>
                    <div class = "options" onclick = "checkAnwser(${answer}, ${answer})"> ${answer} </div>
                </div>`
                
    }   
    
    
    document.getElementById('eingabe').innerHTML = brick;
}


function checkAnwser(answer, userAnswer) {
    
    
    console.log(Number.parseInt(userAnswer), Number.parseInt(answer))
    if(Number.parseInt(answer) == userAnswer) {
        console.log("richtig")
        Main();
    } else {
        console.log('falsch')
    }
}