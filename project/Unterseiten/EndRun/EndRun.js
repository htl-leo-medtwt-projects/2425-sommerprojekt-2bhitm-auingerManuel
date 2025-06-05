document.getElementById('return-to-begin').onclick = function() {
    window.location.href = "../../index.html";
}

let viewWinner = JSON.parse(localStorage.getItem("viewWinner") || '[]');


let player = JSON.parse(localStorage.getItem("players") || '[]');
let achievements = JSON.parse(localStorage.getItem("achievments") || '[]');
let victorys = JSON.parse(localStorage.getItem("victorys") || '[]');


viewWinner.push( {
    player: player,
    achievements: achievements,
    victorys: victorys

});

console.log(viewWinner);

localStorage['viewWinner'] = JSON.stringify(viewWinner);

endRun();

function endRun() {

    let brick = "";
    
    let output = "";

    for(let i = 0; i < viewWinner.length; i++) {
        brick += `<h1> Game ${i + 1} <br> </h1>
      <div class = "moreInfos">  <h2> ${viewWinner[i].player[0].name}  vs  ${viewWinner[i].player[1].name} </h2>`;
        
        if(viewWinner[i].player[0].points > viewWinner[i].player[1].points) {
            brick += `<h3> Winner: ${viewWinner[i].player[0].name} </h2>`;
        } else if(viewWinner[i].player[0].points < viewWinner[i].player[1].points) {
            brick += `<h3> Winner: ${viewWinner[i].player[1].name} </h2>`;
        } else {
            brick += `<h3> Draw </h2>`;
        }
        
        brick += `<h3> Points: ${viewWinner[i].player[0].points} : ${viewWinner[i].player[1].points} </h3>`;
        
        brick += `<h3> Achievements: ${viewWinner[i].achievements[14].count} / 15 </h3>`;
        brick += `<div class = "victoryHistory" onclick = "victoryHistory(${i})"> Show Game History </div>`;

        output += `<div class = "endBox"> ${brick} </div> </div>`

        brick = "";
    }


    

    document.getElementById('output').innerHTML = output;

}


function victoryHistory(index) {
    let brick = "";

    document.getElementById('wins').style.display = "block";
    document.getElementById('output').style.display = "none";    
    for(let i = 0; i < viewWinner[index].victorys.length; i++) {
        brick += `<h1> Player ${i + 1} <br> </h1>`;
        
        for(let j = 0; j < viewWinner[index].victorys[i].length; j++) {
        
            brick += `<h2> Game Winner: ${viewWinner[index].victorys[i][j].name} </h2>`;
            brick += `<h3> Winner Points: ${viewWinner[index].victorys[i][j].points} </h3>`;
            
        }

    } 
    
    brick += `<div id = "returnWins" onclick = "closevicotryHistory()"> <p> Return </p> </div>`

    document.getElementById('wins').innerHTML = brick;

}

function closevicotryHistory() {
    document.getElementById('wins').style.display = "none";
    document.getElementById('output').style.display = "grid";    
}