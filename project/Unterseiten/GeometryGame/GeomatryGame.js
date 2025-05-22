
let currentPlayer = 0;



const dropZone = document.getElementById("checkBox");
dropZone.innerHTML = "<h3> Drop youre answer here </h3>";


let currrentPlayer = 0;


let Point = [
  {
    points: 0,
  }, 
  {
    points: 0,
  }
]

let pl1 = 0;
let pl2 = 1;

let achievments = JSON.parse(localStorage['achievments'] || '[]');
console.log(achievments);
let players = JSON.parse(localStorage['players'] || '[]');
console.log(players);
let config = JSON.parse(localStorage['config'] || '[]');
console.log(config);
let points = 0;


config[1].geomatryGameCount += 1;


if(config[1].geomatryGameCount > 5 && achievments[11].attchieved == false) {
  console.log("test")
  
  achievments[11].attchieved = true;
  achievments[achievments.length - 1].count += 1;
  localStorage['achievments'] = JSON.stringify(achievments);
  achievment();
}

localStorage['config'] = JSON.stringify(config);


let achievmentCounter = 0;

let formeln = {
    area: [
        {
            id: "triangle",
        },
        {
            id: "square",
           
        },
        {
            id: "circle",
            
        },
        {
            id: "parallelogram",
            
        },
        {
            id: "trapeze",
            
        }
    ],

    scope: [
        {
            id: "triangle", 
            
        },
        {
            id: "square",
            
        },
        {
            id: "circle",
            
        },
        {
            id: "parallelogram",
            
        },
        {
            id: "trapeze",
           
        }
    ],

}




let qestArray = "";

let questid = 0;

main();

function CurrentPlayer() {
  let brick = "";
  for(let i = 0; i < players.length; i++) { 
    if(i == currentPlayer) {
      brick += `<p style = "color: #346224"> Player: ${players[i].name} Points: ${Point[i].points} </p> <div id = "Img${i}"> </div>`;
    } else {


      brick += `<p> Player: ${players[i].name} Points: ${Point[i].points} </p> <div id = "Img${i}"> </div>`;
    }
    }
  document.getElementById('currentplayer').innerHTML = brick;
}

function main() {

    CurrentPlayer();

    document.getElementById('checkBox').style.border = "black 2px solid"
    
    document.querySelector("#submit h1").style.opacity = 0.5;

    qestArray = setqestArray();
    questid = setquestid();
    console.log(qestArray + questid);
    qestAusgabe();
    console.log(formeln[qestArray])
    buildOptions(); // Feld wird aufgebaut 
    

    setTimeout(() => {
      setupDragAndDrop();
    }, 1)
    // Drag und Drop wird erstellt
    

    // Fertig
    // Spieler zieht

    // Beprüft (richtig: 10 Punkte || falsch: - 2 Punkte)   document.querySelector("#checkBox img").id

    // Wieder von vorne

}

function qestAusgabe() {
  document.getElementById('search').innerHTML = `<p id = "pfusch"> You are looking for the </p>  <p style = "color: white" >${qestArray} </p> <p> of the </p> <p style = "color: white"> ${formeln[qestArray][questid].id} </p>`;

  

}


function setqestArray() {
  let rnd = Math.ceil(Math.random() * 2);

  return array = rnd == 1 ? "area" : "scope";

}

function setquestid() {
  return rnd = Math.ceil(Math.random() * 4);
}


function rndId(nmb) {
    do {
      nmb = Math.ceil(Math.random() * 4);
    }while(nmb == questid);

    return nmb;
}
let answered = false;
function buildOptions() {
    let one = 100;
    let two = 100;

    one = rndId(one);


    do {
    two = rndId(two);
    } while(two == one);

    

    console.log(one + " " + two);
    
    let reihenfolge = Math.ceil(Math.random() * 2);
    let op = 3;
    

    let brick = "";
    let ids = null;

    switch(reihenfolge) {
      case 0:
        ids = [{num: questid}, {num: one}, {num: two}];
        
      break;
      case 1:
        ids = [{num: one}, {num: questid}, {num: two}];
        break;
        
        case 2:
          ids = [{num: one}, {num: two}, {num: questid}];
        
    }


    for(let i = 0; i < op; i++) {
        
          brick += `<div  class="options-elemts" draggable ="true" ><img id ="${formeln[qestArray][ids[i].num].id}"  src="../../img/GeomatryGame/${qestArray}_${formeln[qestArray][ids[i].num].id}.png" alt=""></div>`
        }
    
    // brick += `<div  class="options-elemts" draggable ="true" ><img id ="${formeln[qestArray][rnd].id}"  src="../../img/green-square-1.png" alt=""></div>`
    document.getElementById('options-grid').innerHTML = brick;
}


// Drag und Drop
function setupDragAndDrop() {
  const cards = document.querySelectorAll(".options-elemts")
 
  cards.forEach((card) => {
    card.addEventListener("dragstart", dragStart)
    card.addEventListener("dragend", dragEnd)
  })

  dropZone.addEventListener("dragover", dragOver)
  dropZone.addEventListener("dragleave", dragLeave)
  dropZone.addEventListener("drop", drop)
}
function dragStart(e) {
  console.log("test")
  if (answered) return
  
  this.classList.add("dragging")
  e.dataTransfer.setData("text/plain", this.dataset.correct)
  e.dataTransfer.effectAllowed = "move"
}
function dragEnd() {
  this.classList.remove("dragging")
}
function dragOver(e) {
  if (answered) return

  e.preventDefault()
  this.classList.add("drag-over")
}
function dragLeave() {
  this.classList.remove("drag-over")
}
function drop(e) {
  e.preventDefault()

  if (answered) return

  this.classList.remove("drag-over")
  console.log("drop test")
  

  // Get the dragged card
  const draggedCard = document.querySelector(".dragging")

  // Move the card to the drop zone
  if (draggedCard) {
    // Clear the drop zone first
    while (this.firstChild) {
      if (this.firstChild.tagName !== "P") {
        this.removeChild(this.firstChild)
      } else {
        break
      }
    }

    // Clone the card and add it to the drop zone
    const cardClone = draggedCard.cloneNode(true)
    cardClone.classList.add("in-drop-zone")
    cardClone.classList.remove("dragging")
    cardClone.draggable = false
    this.appendChild(cardClone)
    this.classList.add("has-card")

    // Hide the original card
    draggedCard.style.visibility = "hidden"
    

    //document.querySelector("#checkBox img").id = `${formeln.Umfang[0].id}`;
    // Check answer
    checkAnswer()
  }
}
function checkAnswer() {
answered = true


console.log(document.querySelector("#checkBox img").id);

if(formeln[qestArray][questid].id == document.querySelector("#checkBox img").id) {
  console.log("richtig")
  achievmentCounter++;
  Point[currentPlayer].points += 10;
  
  document.getElementById('output').innerHTML = `<p style = "color: #346224"> Right + 10 Points </p>`

  document.getElementById('checkBox').style.border = "#346224 5px solid"


} else {
  	achievmentCounter = 0;
  if(achievments[8].attchieved == false) {
    achievments[8].attchieved = true;
    achievments[achievments.length - 1].count += 1;

    localStorage['achievments'] = JSON.stringify(achievments);
    achievment();
  }


  Point[currentPlayer].points -= 2;
  console.log("falsch")
  document.getElementById('output').innerHTML = `<p style = "color: #A62929"> Wrong - 2 Points </p>`
  document.getElementById('checkBox').style.border = "#A62929 5px solid"
  currentPlayer += 1;
  if(currentPlayer > players.length - 1) {
    endGame();
  }
}

animationSumbit();


if(achievmentCounter >= 4 && achievments[9].attchieved == false) {
  achievments[9].attchieved = true;
  achievments[achievments.length - 1].count += 1;
  localStorage['achievments'] = JSON.stringify(achievments);
  achievment();

}

if(achievmentCounter >= 10 && achievments[10].attchieved == false) {
  achievments[10].attchieved = true;
  achievments[achievments.length - 1].count += 1;
  localStorage['achievments'] = JSON.stringify(achievments);
  achievment();
}
}
function nextQuestion() {
  dropZone.innerHTML = "<h3> Drop youre answer here </h3>";
  dropZone.className = "drop-zone";
  answered = false
  document.getElementById('output').innerHTML = "<p>Waiting...</p>";
  main();
} 



function animationSumbit()  {
  let value = 0.5;
  /*
  for(let i = 0; i < 5;i++ ) {
  setTimeout(() => {
    document.querySelector('#submit h1').style.opacity = value += 0.1;
  }, 1000);

  
  }
*/
document.querySelector("#submit h1").style.opacity = 1.0;

  document.getElementById('submit').addEventListener("click",() => {
    nextQuestion();
  })

}


function achievment() {

    localStorage['achievment'] = JSON.stringify(achievments);

    document.getElementById('achievments').style.display = "block";
    setTimeout(() => {
        document.getElementById('achievments').style.display = "none";
    }, 3000)
}


function endGame() {
    document.getElementById('Geomatry-Game').style.display = "none";
    document.getElementById('currentplayer').style.display = "none"
    let victories = JSON.parse(localStorage['victorys'] || '[]');

    for(let i = 0; i < players.length; i++) {
      players[i].points += Point[i].points;
    }


    let winner = "";
    
    if(Point[pl1].points != Point[pl2].points) {

        if(Point[pl1].points > Point[pl2].points) {
           victories[pl1].push({
                name: players[pl1].name, Game: "GeomatryGame", points: Point[pl1].points
            })
            winner = players[pl1].name;
        } else {
            victories[pl2].push({
                name: players[pl2].name, Game: "GeomatryGame", points: Point[pl2].points
            });
            winner = players[pl2].name;
        }
        document.getElementById('points').innerHTML = `<p> ${players[pl1].name} - ${Point[pl1].points} : ${Point[pl2].points} - ${players[pl2].name} </p>`
    document.getElementById('winner').innerHTML = `<p> ${winner} hat gewonnen </p>`;
        
    } else {    
        document.getElementById('winner').innerHTML = "<p> Draw </p>"
    }   
    document.getElementById('end').style.display = "grid";
    localStorage['victorys'] = JSON.stringify(victories);
    localStorage['players'] = JSON.stringify(players);
}



