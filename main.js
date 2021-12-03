window.addEventListener("load", function(event){
    let titreMenu = document.querySelectorAll(".menu-title");
    // console.log(titreMenu);

    //Get the button:
    const mybuttonTop = document.getElementById("myBtn");
    const mybuttonToggle = document.getElementById("bite");

    // console.log(mybuttonTop);
    // console.log(mybuttonToggle);

// When the user scrolls down 400px from the top of the document, show the button
    window.onscroll = function() {ScrollFunction()};

    function ScrollFunction() {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            mybuttonTop.style.display = "block";
            // mybuttonToggle.style.display = "block";
        } else {
            mybuttonTop.style.display = "none";
            // mybuttonToggle.style.display = "none";
        }
    }

    window.addEventListener("scroll",() => {
        ProgressSkills();
    });

    mybuttonTop.addEventListener("click", event =>{
        TopFunction();
    });

    mybuttonToggle.addEventListener("click", event =>{
        ChangeLight();
        ChangeSystem();
    });

    const heightWindow = window.innerHeight;
    console.log(heightWindow);
    if(heightWindow == 931){
        console.log('ök');
        const box = document.querySelector(".education-timeline");
        box.style.top = '520vh';
        const ligne = document.querySelector(".ligne");
        ligne.style.height = '500px';
        // ligne.style.margin-top = '10px'

    }

});


function ProgressSkills(){
    const skills = document.getElementById('Skills');
    const progressBars = document.querySelectorAll(".progress-bar");
    const sectionPos = skills.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if(sectionPos < screenPos){
        progressBars.forEach(progressBar=> {
            const value = progressBar.dataset.progress;
            progressBar.style.opacity = 1;
            progressBar.style.width = `${value}%`;
        });
    }else{
        progressBars.forEach(p => {
            p.style.opacity = 0;
            p.style.width = 0;
        });
    }
}

// When the user clicks on the button, scroll to the top of the document
function TopFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function ChangeLight() {
    var element = document.querySelector("body");
    var menu = document.querySelector("nav-item");
    element.classList.toggle("dark-theme");
    // div.classList.replace("foo", "bar"); // doesn't work
    // expTimeline.style.background =  `rgb(19, 17, 17)`;



    // menu.classList.toggle("dark-theme");

    // setTimeout(()=> {
    //     ChangeSystem(element);
    // },1000);


    

    // if(isDark){
    //     document.body.style.backgroundColor = "White";
    //     isDark = false;
    //     console.log(isDark)
    // }
    // else{
    //     document.body.style.backgroundColor = "Black";
    //     isDark = true;
    //     console.log(isDark)
    // }
    // return isDark;
}

function ChangeSystem() { // when lightbutton is pressed, change between sun and moon shape in BG
    var element = document.querySelector("body"); // get body
    const divSystem = document.querySelector("#System"); // get id="System" (div)
    var menu = document.querySelector(".menu-title"); //all <a> in menu-nav
    var job = document.querySelector(".Job");
    const experience = document.querySelector("#experience-timeline");
    const education = document.querySelector("#education-timeline");

    var iterator = element.classList; // element.classList return an iterator in js
    divSystem.classList.remove("moon"); //remove moon class
    divSystem.classList.add("sun"); //display sun shape
    education.classList.remove("#education-dark");
    document.documentElement.style.setProperty('--v1', '#be91c6');
    document.documentElement.style.setProperty('--s1', '#fea798');
    document.documentElement.style.setProperty('--s2', '#ff846e');
    document.documentElement.style.setProperty('--cloud', '#fea798');
    document.documentElement.style.setProperty('--v5', '#8a65cc');
    document.documentElement.style.setProperty('--v6', '#ff846e');
    document.documentElement.style.setProperty('--v7', '#fea798');


    // console.log("display sun");
    for(var value of iterator){ //value is the value inside DOMTokenList.values()
        // console.log('value = ' + value);
        
        if(value == "dark-theme"){ // thanks to iterator, value == dark-theme and not an array of DOMTokenList.values()
            // divSystem.classList.replace("sun", "moon");
            divSystem.classList.remove("sun"); // if true display moon shape
            divSystem.classList.add("moon");
            education.classList.add("#education-dark");


            //change all color for :root colors animation
            document.documentElement.style.setProperty('--v1', '#3d313f');
            document.documentElement.style.setProperty('--s1', '#583a68');
            document.documentElement.style.setProperty('--s2', '#382e44');
            document.documentElement.style.setProperty('--cloud', '#5e30d900');
            document.documentElement.style.setProperty('--v5', '#3d313f');
            document.documentElement.style.setProperty('--v6', '#8a65cc');
            document.documentElement.style.setProperty('--v7', '#5e30d9');
            // console.log("display moon");
    
        }
    }
}