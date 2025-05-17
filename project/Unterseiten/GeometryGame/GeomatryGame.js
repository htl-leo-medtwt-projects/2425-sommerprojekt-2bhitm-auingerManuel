
let currentPlayer = 0;

let players = JSON.parse(localStorage['players'] || '[]');
console.log(players);
let achievmetns = JSON.parse(localStorage['achievments'] || '[]')
console.log(achievmetns);

const dropZone = document.getElementById("checkBox");
dropZone.innerHTML = "<h3> Drop youre answer here </h3>";

let formeln = {
    area: [
        {
            id: "triangle",
            text: ""

        },
        {
            id: "square",
            text: "a * a"
        },
        {
            id: "circle",
            text: "r² * pi"
        },
        {
            id: "parallelogram",
            text: "a * b"
        },
        {
            id: "trapeze",
            text: "1/2 * h * (a + c)"
        }
    ],

    scope: [
        {
            id: "triangle",
            text: "a + b + c"
        },
        {
            id: "square",
            text: "4a"
        },
        {
            id: "circle",
            text: "2pir"
        },
        {
            id: "parallelogram",
            text: "2 * (a + b)"
        },
        {
            id: "trapeze",
            text: "(a + c) * h / 2"
        }
    ],

}
let qestArray = "";

let questid = 0;

main();


function main() {

    
    
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
  document.getElementById('search').innerHTML = `<p id = "pfusch"> Sie suchen die/denn </p>  <p style = "color: white" >${qestArray} </p> <p> für </p> <p style = "color: white"> ${formeln[qestArray][questid].id} </p>`;

  switch(qestArray) {
    case "Fläche":
      document.getElementById("pfusch").innerHTML = "Sie suchen die "
    break;


    case "Umfang":

    document.getElementById("pfusch").innerHTML = "Sie suchen denn "


  }


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
console.log("test");

console.log(document.querySelector("#checkBox img").id);

if(formeln[qestArray][questid].id == document.querySelector("#checkBox img").id) {
  console.log("richtig")
} else {
  console.log("falsch")
}

animationSumbit();

}
function nextQuestion() {
  dropZone.innerHTML = "<h3> Drop youre answer here </h3>";
  dropZone.className = "drop-zone";
   answered = false
   
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



