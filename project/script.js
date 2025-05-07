// Startseite

document.getElementById('box').innerHTML = ` Auf dieser Website Spielen 2 Spieler gegeneinander Mathe Spiele, um sich zu messen. <br> Viel Spaß <div id = "button" onclick = "getStartButton()">  <img src="./img/icons8-close-50.png" alt=""> </div>`
numb = 0;


let calciQuotes = [
  { sentence: "Hey Users my name is Calci i am youre Guide for this Math Game Website." },
  { sentence: "You can play agianst each other in three Math Games!" },
  { sentence: "PLease fill in youre Name Player One" },
  { sentence: "Good Job, now you Player Two" },
  { sentence: "Now Press Submit to enter the Menu, we will meet there" },
  { sentence: "Hey Overhere!" },
  { sentence: "This is the Homepage. we have left and right the View of youre Stats." },
  { sentence: "Youre Point Counts are youre Total Points you gather from the three Games in the Middle" },
  { sentence: "We have CountGame, Geomatry Game and Prime Hunt " },
  { sentence: "On the bottom are the Contacs of the Creator if you need help" },
  { sentence: "Fill Text" },
  { sentence: "Fill Text" },
  { sentence: "Fill Text" },
  { sentence: "Fill Text" },
  { sentence: "Fill Text" },
  { sentence: "Fill Text" },
  { sentence: "Fill Text" },
  { sentence: "Fill Text" },
  { sentence: "Fill Text" },
  { sentence: "Fill Text" }
];



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
    [
        {
            name: "Count Game"
        }
    ],
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
   
    document.getElementById('box').style.display = 'none';

    document.getElementById('createPlayer').innerHTML = `
        <div id = "create-grid">
        <div id="CreateplayerOne" class="boxCreate">
            <label for="pl1">Spieler 1:</label>
            <input type="text" name="pl1" id="pl1">
            <div class = "submitName" onclick = "getname(0)"> Submit </div>
        </div>
        <div id="CreateplayerTwo" class="boxCreate">
            <label for="pl2">Spieler 2:</label>
            <input type="text" name="pl2" id="pl2">
             <div class = "submitName" onclick = "getname(1)"> Submit</div>
        </div>
        </div>
        <div id = "submit">  <a href="./homepage.html">Submit</a> </div>
        `
}

function getname(player) {
    let players = JSON.parse(localStorage['players'] || '[]');

    players[player].name = document.getElementById(`pl${player + 1}`).value;


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

function leiste() {
    let brick = "";
    brick += ` <p class = "infoText"> Manuel </p> <p class = "infoText">  Auinger </p> <p class = "infoText"> 2bhitm </p> <a href="https://www.instagram.com/manuel_au08/"><img src="./img/instagram-logo-instagram-icon-transparent-free-png 1.png" alt=""></a> <a href="./tipsAchievments.html"><img src="./img/final-lightbulb-100 1.png" alt=""></a>`
    document.getElementById('leiste').innerHTML = brick;
}


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










