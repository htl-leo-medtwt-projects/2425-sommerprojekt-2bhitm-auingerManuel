gsap.registerPlugin(ScrollTrigger);
let tips = [
    { name: "Placeholder", attchieved: false, tip: "Placeholder" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder" },
    { name: "Placeholder", attchieved: false, tip: "Placeholder" }
  ];


Tips();
  
  function Tips() {
    let brick = "";


    for(let i = 0; i < tips.length; i++ ) {
        brick += `<div class = "tips-elements"> ${tips[i].name} </div>`
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