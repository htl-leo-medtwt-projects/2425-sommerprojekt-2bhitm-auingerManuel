gsap.registerPlugin(ScrollTrigger);
let sections;
let tips = JSON.parse(localStorage['achievments'] || '[]');

console.log(tips);
  function getTips(index) {
    document.getElementById('chat').style.display = "flex";
    document.getElementById('chat').innerHTML = `<h1> ${tips[index].tip} </h1> <div onclick = "closeTip()"> <img src="../../img/icons8-close-50.png" alt=""> </div>`
  }

  function closeTip() {
    document.getElementById('chat').innerHTML = "";
    document.getElementById('chat').style.display = "none";

  }


Tips();
  
  function Tips() {
    let brick = "";
    for(let i = 0; i < tips.length - 1; i++ ) {

        if(tips[i].attchieved) {
            brick += `<div class = "tips-elements right"> <h3> Achievment: ${i + 1} </h3> <h3> NAME:${tips[i].name} </h3> <div class = "state"><img src="../../img/icons8-unlock-50.png" alt=""> </div> <div class = "tip" onclick = "getTips(${i})"> <h3> get Tipps </h3> </div> </div>`
        } else {
             brick += `<div class = "tips-elements"> <h3> Achievment: ${i + 1} </h3> <h3> NAME:${tips[i].name} </h3> <div class = "state"><img src="../../img/icons8-lock-50.png" alt=""> </div> <div class = "tip" onclick = "getTips(${i})"> <h3> get Tipps </h3> </div> </div>`
        }
    }
    document.getElementById('tipsAchievments-list').innerHTML = brick;

    
    sections = document.querySelectorAll('.tips-elements');
    for(let i = 0; i < sections.length;i++) {
        generateScrollAnimation(i);
    }
    

  }


function generateScrollAnimation(i) {
    let element = sections[i];

    /* SET START KEY FRAME */
    if(i%2 == 0) {
        
        gsap.set(element, {
            x: '-50%',
            scale: 0,
            opacity: 0
        });
    
    } else {
        gsap.set(element, {
            x: '50%',
            scale: 0,
            opacity: 0
        });
    }
    
    
    /* SET END KEY FRAME */
    gsap.to(element, {
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 0.7,
        
        scrollTrigger: {
            trigger: element,
            
            start: '50% 80%',  /* 'Ankerpunkt Offset' */
        }
    });
}