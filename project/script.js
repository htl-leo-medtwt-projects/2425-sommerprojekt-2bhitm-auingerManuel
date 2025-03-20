document.getElementById('box').innerHTML = ` Auf dieser Website Spielen 2 Spieler gegeneinander Mathe Spiele, um sich zu messen. <br> Viel Spaß <div id = "button" onclick = "getStartButton()">  <img src="./img/icons8-close-50.png" alt=""> </div>`


function getStartButton() {
    document.getElementById('box').style.animation = 'buttonForm 1s';
    setTimeout(styling(), 1000)
    document.getElementById('box').style.fontSize = 'larger'
    document.getElementById('box').innerHTML = `<div onclick = "getCharacter()"> Start Game </div>`
}

function styling() {
document.getElementById('box').style.width = '20%'
document.getElementById('box').style.backgroundColor = '#648DE5';
document.getElementById('box').style.fontSize = 'larger';

}

function getCharacter() {
    document.getElementById('box').style.display = 'none';
    document.getElementById('headline').style.display = 'none'
    document.getElementById('createPlayer').innerHTML = ` <div id="playerOne" class="boxCreate">
            <label for="pl1">Spieler 1:</label>
            <input type="text" name="pl1" id="pl1">
        </div>
        <div id="playerTwo" class="boxCreate">
            <label for="pl1">Spieler 2:</label>
            <input type="text" name="pl1" id="pl1">
        </div>`
}
