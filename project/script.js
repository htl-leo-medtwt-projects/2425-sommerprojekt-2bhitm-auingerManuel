// Startseite

document.getElementById('box').innerHTML = ` Auf dieser Website Spielen 2 Spieler gegeneinander Mathe Spiele, um sich zu messen. <br> Viel Spaß <div id = "button" onclick = "getStartButton()">  <img src="./img/icons8-close-50.png" alt=""> </div>`
numb = 0;



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

localStorage['playerOne'];
localStorage['playerTwo'];

localStorage['victorys'];


let victorys = [
    [
        {
            name: "Count Game"
        }
    ],
    []
]

localStorage['victorys'] = victorys;


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
        </div>
        <div id="CreateplayerTwo" class="boxCreate">
            <label for="pl2">Spieler 2:</label>
            <input type="text" name="pl2" id="pl2">
        </div>
        </div>
        <div id = "submit" onclick = "homePage()"> Submit </div>
        `
}

// HomePage

function homePage() {
    document.getElementById('leiste').style.display = 'flex';
    document.getElementById('headline').style.display = 'none';
    for(let i = 0; i < 2; i++) {
        players[i].name = document.getElementById(`pl${i + 1}`).value;
        
    }
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










