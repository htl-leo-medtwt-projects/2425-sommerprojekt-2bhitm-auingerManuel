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

    let rnd = Math.floor(Math.random() * 3);
    let brick = "";


    switch(rnd) {
        case 1:
            brick = `<section>
                    <option id="answerOne" value="${answer}">${answer}</option>
                    <option id="answerTwo" value="${getrndNr(answer)}">${getrndNr(answer)}</option>
                    <option id="answerThree" value="${getrndNr(answer)}">${getrndNr(answer)}</option>
                    </section>`
            break;
        
            case 2:
               brick = `<section>
                    <option id="answerOne" value="${getrndNr(answer)}">${getrndNr(answer)}</option>
                    <option id="answerTwo" value="${answer}">${answer}</option>
                    <option id="answerThree" value="${getrndNr(answer)}">${getrndNr(answer)}</option>
                    </section>`
            break;
            case 3:
                brick = `<section>
                <option id="answerOne" value="${getrndNr(answer)}">${getrndNr(answer)}</option>
                <option id="answerTwo" value="${getrndNr(answer)}">${getrndNr(answer)}</option>
                <option id="answerThree" value="${answer}">${answer}</option>
                </section>`
                
    }   
    
    
    document.getElementById('eingabe').innerHTML = brick;
}