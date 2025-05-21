// Startseite


numb = 0;

let calciCounter = 0;
let playerCount = 0;
let calciQuotes = [
  { sentence: "Hey Users my name is Calci i am youre Guide for this Math Game Website." },
  { sentence: "You can play agianst each other in three Math Games!" },
  { sentence: "Please fill in youre Name Player One" },
  { sentence: "Good Job, now you Player Two" },
  { sentence: "Now Press Submit to enter the Menu, we will meet there <div id = 'submit'>  <a href='./HomePage/homepage.html'>Submit</a> </div>"},
  { sentence: "Hey Overhere!" },
  { sentence: "This is the Homepage. we have left and right the View of youre Stats." },
  { sentence: "Youre Points are youre Total Points you gather from the three Games in the Middle" },
  { sentence: "We have CountGame, Geomatry Game and Prime Hunt " },
  { sentence: "On the bottom are the Contacs of the Creator if you need help" },
  { sentence: "Also you will also see a lightbulb that shows all the Achievments you gather around playing on the Website"},
  { sentence: "There isnt much to say anymore..." },
  { sentence: "But i hope you have a great Time" },
  { sentence: "And also i stay here and you can get the Infos all the Time" },
  {sentence: "Hey welcome to CountGame both respected Players need to Start the Game on there own, after both runs Winner will be presented"},
  {count: 0}
];

let tips = [
    { name: "10 Pointer", attchieved: false, tip: "One of the Player needs 10 Points" },
    { name: "20 Pointer", attchieved: false, tip: "One of the Player needs 20 Points" },
    { name: "30 Pointer", attchieved: false, tip: "One of the Player needs 30 Points" },
    { name: "50 Pointer", attchieved: false, tip: "One of the Player needs 50 Points" },
    { name: "Last Chance!", attchieved: false, tip: "One Player needs to awnser at least in the last seconds!" },
    { name: "Count Game sweat", attchieved: false, tip: "Play Count Game for at least 5 times" }, // Count Game
    { name: "Lucky 4", attchieved: false, tip: "One of the Players need to get 4 following Questions right" },
    { name: "Ha! What a coincidence", attchieved: false, tip: "Get the same Question Again" },
    { name: "Wrong Drop", attchieved: false, tip: "get the Question wrong" },
    { name: "Drag Calci", attchieved: false, tip: "Drag Calci in the Box" },
    { name: "Geomatry Master", attchieved: false, tip: "Get all 10 right" }, // Geomatry Game
    { name: "Geomatry Sweat", attchieved: false, tip: "Play Geomaatry Game 5 times" },
    { name: "Intercact with calci", attchieved: false, tip: "Talk with cacli for the first Time" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder13" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder14" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder15" }, // Prime Hunt
    { name: "Placeholder", attchieved: false, tip: "Placeholder16" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder17" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder18" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder19" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder20" }, // Homepage
    { name: "Placeholder", attchieved: false, tip: "Placeholder21" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder22" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder23" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder24" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder25" }, // Extra
    { name: "Placeholder", attchieved: false, tip: "Placeholder26" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder27" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder28" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder29" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder30" },
    {count: 0}
  ];


  let config = [
    {
        countGameCount: 0
    },
    {
        geomatryGameCount: 0
    }
    
    
  ]

    localStorage['config'] = JSON.stringify(config);

localStorage['achievments'] = JSON.stringify(tips);
localStorage['calci'] = JSON.stringify(calciQuotes);


document.getElementById('box').innerHTML = `<div> ${calciQuotes[calciCounter].sentence} </div> <div id = "button" onclick = "ControlCalci()">  <img src="./img/icons8-close-50.png" alt=""> </div>`
let players = [
     {
        points: 0,
        name: ''
    },
    {
        points: 0,
        name: ''
    }
]


localStorage['players'] = JSON.stringify(players);

localStorage['victorys'];


let victorys = [
    [],
    []
]

localStorage['victorys'] = JSON.stringify(victorys);


document.getElementById('box').addEventListener("keyup",(e) => {
    console.log(e.key);
    if(e.key === "Enter") {

        switch(numb) {
            case 0:
                getStartButton();
                
                break;
            case 1: 
                getCharacter();
                break;    
        }

    }
})

function ControlCalci() {
    calciCounter++;
    calciQuotes[calciQuotes.length-1].count = calciCounter;
    localStorage['calci'] = JSON.stringify(calciQuotes);
    document.getElementById('box').innerHTML = `<div> <p> ${calciQuotes[calciCounter].sentence} </p> </div> <div id = "button" onclick = "ControlCalci()">  <img src="./img/icons8-close-50.png" alt=""> </div>`

    if(calciCounter >= 2 && calciCounter <= 4 )  {
        document.getElementById('box').innerHTML = `<div> <p> ${calciQuotes[calciCounter].sentence} </p> </div>`
    }



    if(calciCounter == 2) {
        
        document.getElementById('createPlayer').style.display = "grid";
        getCharacter();
    } 
}


function getStartButton() {
    numb = 1;
    
    document.getElementById('box').style.animation = 'buttonForm 1s';
    setTimeout(styling(), 1000)
    document.getElementById('box').innerHTML = `<div onclick = "getCharacter()"> <h1> Start Game </h1> </div>`
}

function styling() {
document.getElementById('box').style.width = '20%'
document.getElementById('box').style.fontSize = 'larger';

}

function getCharacter() {

    if(calciQuotes == 2) {
        document.getElementById('box').innerHTML = `${calciQuotes[calciCounter].sentence}`;
    } 

    if(calciQuotes > 2) {
        document.getElementById['box'].innerHTML = `${calciQuotes[calciCounter].sentence}`;
    }
   

    document.getElementById('createPlayer').innerHTML = `
        <input id = "pl${playerCount}" type="text" placeholder=" Player ${playerCount + 1}">
        <div id = "playerSubmit" onclick = "getname(${playerCount})"> <p> Submit </p> </div>
        `
}

function getname(player) {
    let players = JSON.parse(localStorage['players'] || '[]');
    
    players[player].name = document.getElementById(`pl${player}`).value;
    playerCount++;

    ControlCalci();
    if(playerCount < 2) {
    getCharacter();
    } else 
    {
        document.getElementById('createPlayer').style.display = "none";
    }
    localStorage['players'] = JSON.stringify(players);
}

// HomePage

function homePage() {
    window.location.replace("./homepage.html");
    let players = JSON.parse(localStorage['players'] ?? '[]');

    document.getElementById('leiste').style.display = 'grid';
    document.getElementById('headline').style.display = 'none';
    for(let i = 0; i < 2; i++) {
        players[i].name = document.getElementById(`pl${i + 1}`).value;
        
    }
    localStorage['players'] = JSON.stringify(players);
    console.log(players)
    document.getElementById('createPlayer').innerHTML = '';
    document.getElementById('homePage').style.display = 'grid';
    document.getElementById('GamesNav-grid').innerHTML += '<div class = "Games" id = "CountGame"><a href="./Unterseiten/CountGame/CountGame.html"> <h2> CountGame </h2>  </a></div>'
    document.getElementById('GamesNav-grid').innerHTML += '<div class = "Games" id = "GeometryGame"><a href="./Unterseiten/GeometryGame/GeometryGame.html"> <h2> GeometryGame </h2>  </a></div>'
    document.getElementById('GamesNav-grid').innerHTML += '<div class = "Games" id = "PrimeHunt"><a href="./Unterseiten/PrimeHunt/PrimeHunt.html"> <h2> PrimeHunt </h2>  </a></div>'
    document.getElementById('leiste').innerHTML = '<div id = "info"> </div> <div id = "Info/Achievments"> </div>'
    leiste();
    update();
}
/*
function leiste() {
    let brick = "";
    brick += ` <p class = "infoText"> Manuel </p> <p class = "infoText">  Auinger </p> <p class = "infoText"> 2bhitm </p> <a href="https://www.instagram.com/manuel_au08/"><img src="../img/instagram-logo-instagram-icon-transparent-free-png 1.png" alt=""></a> <a href="./tipsAchievments.html"><img src="../img/final-lightbulb-100 1.png" alt=""></a>`
    document.getElementById('leiste').innerHTML = brick;
}

*/
function update() {
    for(let i = 0; i < 2; i++) {
        document.getElementById(`player${i + 1}`).innerHTML = `<h1> ${players[i].name} </h1> <p> Points: ${players[i].points} </p> <div class = "victory"> <p> Victories: ${victorys[i].length} </p> <div class = "win" id = "wins${i + 1}"> </div>`
    }

    let brick = "";

    for(let i = 0; i < victorys.length; i++) {
        brick = "<ol>";

        if(victorys[i].length != 0) {
        for(let j = 0; j < victorys[i].length; j++) {
            brick += `<li> ${victorys[i][j].name} </li>`;
        }
        brick += "</ol>"
    } else {
        brick = 'No Victories';
    }
    brick += '</div>'
    document.getElementById(`wins${i + 1}`).innerHTML += brick;
    }
}



// Count Game










