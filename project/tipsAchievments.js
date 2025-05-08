gsap.registerPlugin(ScrollTrigger);
let tips = [
    { name: "Placeholder", attchieved: false, tip: "Placeholder1" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder2" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder3" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder4" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder5" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder6" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder7" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder8" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder9" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder9" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder10" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder11" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder12" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder13" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder14" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder15" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder16" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder17" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder18" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder19" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder20" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder21" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder22" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder23" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder24" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder25" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder26" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder27" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder28" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder29" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder30" }
  ];


  function getTips(index) {
    document.getElementById('chat').style.display = "flex";
    document.getElementById('chat').innerHTML = `<h1> ${tips[index].tip} </h1> <div onclick = "closeTip()"> <img src="./img/icons8-close-50.png" alt=""> </div>`
  }

  function closeTip() {
    document.getElementById('chat').innerHTML = "";
    document.getElementById('chat').style.display = "none";

  }


Tips();
  
  function Tips() {
    let brick = "";



    for(let i = 0; i < tips.length; i++ ) {

        if(tips[i].attchieved) {
            brick += `<div class = "tips-elements"> <h3> Achievment: ${i + 1} </h3> <h3> NAME:${tips[i].name} </h3> <div class = "state"><img src="./img/icons8-unlock-100.png" alt=""> </div> <div class = "tip" onclick = "getTips(${i})"> <h3> get Tipps </h3> </div> </div>`
        } else {
             brick += `<div class = "tips-elements"> <h3> Achievment: ${i + 1} </h3> <h3> NAME:${tips[i].name} </h3> <div class = "state"><img src="./img/icons8-lock-100.png" alt=""> </div> <div class = "tip" onclick = "getTips(${i})"> <h3> get Tipps </h3> </div> </div>`
        }


       
    }
    document.getElementById('tipsAchievments-list').innerHTML = brick;
  }


  let sections = document.querySelectorAll('.tips-elements');
for(let i = 0; i < sections.length;i++) {
    generateScrollAnimation(i);
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