document.getElementById('box').innerHTML = ` Auf dieser Website Spielen 2 Spieler gegeneinander Mathe Spiele, um sich zu messen. <br> Viel Spaß <div id = "button" onclick = "getStartButton()">  <img src="./img/icons8-close-50.png" alt=""> </div>`


function getStartButton() {

    document.getElementById('box').style.animation = 'buttonForm 1s';
    setTimeout(document.getElementById('box').style.width = '20%', 1000)
    document.getElementById('box').style.fontSize = 'larger'
    document.getElementById('box').innerHTML = `<div onclick = "getCharacter>"> Start Game </div>`
    
}


function getCharacter() {
    console.log('test')
}
