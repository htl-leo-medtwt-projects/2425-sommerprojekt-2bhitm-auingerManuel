
let players = JSON.parse(localStorage['players'] || '[]');
let victorys = JSON.parse(localStorage['victorys'] || '[]');
let calciQuotes = JSON.parse(localStorage['calci'] || '[]');
let calciCounter = calciQuotes[calciQuotes.length - 1].count;
console.log(calciQuotes);
console.log(calciCounter)
document.getElementById('calci').style.marginLeft = "85%";
document.getElementById('calci').style.marginBottom = "4%"
document.getElementById('calci').style.width = "10%"
homePage();
function homePage() {
    document.getElementById('leiste').style.display = 'grid';
    
    console.log(players)
    
    document.getElementById('homePage').style.display = 'grid';
    document.getElementById('GamesNav-grid').innerHTML += '<div class = "Games" id = "CountGame"><a href="../Unterseiten/CountGame/CountGame.html"> <h2> CountGame </h2>  </a></div>'
    document.getElementById('GamesNav-grid').innerHTML += '<div class = "Games" id = "GeometryGame"><a href="../Unterseiten/GeometryGame/GeometryGame.html"> <h2> GeometryGame </h2>  </a></div>'
    document.getElementById('GamesNav-grid').innerHTML += '<div class = "Games" id = "PrimeHunt"><a href="../Unterseiten/PrimeHunt/PrimeHunt.html"> <h2> PrimeHunt </h2>  </a></div>'
    document.getElementById('leiste').innerHTML = '<div id = "info"> </div> <div id = "Info/Achievments"> </div>'
    
    leiste();
    update();
}

function leiste() {
    let brick = "";
    brick += ` <p class = "infoText"> Manuel </p> <p class = "infoText">  Auinger </p> <p class = "infoText"> 2bhitm </p> <a href="https://www.instagram.com/manuel_au08/"><img src="../img/instagram-logo-instagram-icon-transparent-free-png 1.png" alt=""></a> <a href="../Unterseiten/Achievments/tipsAchievments.html"><img src="../img/final-lightbulb-100 1.png" alt=""></a>`
    document.getElementById('leiste').innerHTML = brick;
}

ControlCalci()

function ControlCalci() {
    calciCounter++;

    if(calciCounter == 10) {
        document.getElementById('calci').innerHTML = `<img src="../img/tutorWorried.png" alt="">`;
    }

    if(calciCounter > 10) {
        document.getElementById('calci').innerHTML = `<img src="../img/tutorSits.png" alt="">`;
    }

    if(calciCounter == calciQuotes.length - 2) {
        calciCounter = 5;
    }
    document.getElementById('calciChats').innerHTML = `<p> ${calciQuotes[calciCounter].sentence} </p> <div id = "continueChat" onclick = "ControlCalci()" > <img src="../img/icons8-close-50.png" alt=""> </div>`
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

