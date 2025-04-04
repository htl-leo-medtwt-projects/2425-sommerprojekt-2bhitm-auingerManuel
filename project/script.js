// Startseite

document.getElementById('box').innerHTML = ` Auf dieser Website Spielen 2 Spieler gegeneinander Mathe Spiele, um sich zu messen. <br> Viel Spaß <div id = "button" onclick = "getStartButton()">  <img src="./img/icons8-close-50.png" alt=""> </div>`

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


let victorys = [
    [
        {
            name: "Count Game"
        }
    ],
    []
]




function getStartButton() {
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

function homePage() {
    document.getElementById('headline').style.display = 'none';
    for(let i = 0; i < 2; i++) {
        players[i].name = document.getElementById(`pl${i + 1}`).value;
        
    }
    console.log(players)
    document.getElementById('createPlayer').innerHTML = '';
    document.getElementById('homePage').style.display = 'grid';
    document.getElementById('GamesNav-grid').innerHTML = '<div class = "CountGame"> <h2> CountGame </h2> </div>'
    update();
}


function update() {
    for(let i = 0; i < 2; i++) {
        document.getElementById(`player${i + 1}`).innerHTML = `<h1> ${players[i].name} </h1> <p> Points: ${players[i].points} </p> <div> <p> Victories </p>`
    }

    let brick = "";

    for(let i = 0; i < victorys.length; i++) {
        brick = "";

        if(victorys[i].length != 0) {
        for(let j = 0; j < victorys[i].length; j++) {
            brick += `# ${victorys[i][j].name}`;
        }
    } else {
        brick = 'No Victories';
    }
    brick += '</div>'
    document.getElementById(`player${i + 1}`).innerHTML += brick;
    }
}

// HomePage






