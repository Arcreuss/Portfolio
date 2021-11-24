window.addEventListener("load", function(event){
    let titreMenu = document.querySelectorAll(".menu-title");
    console.log(titreMenu);

    //Get the button:
    const mybuttonTop = document.getElementById("myBtn");
    const mybuttonToggle = document.getElementById("bite");

    console.log(mybuttonTop);
    console.log(mybuttonToggle);

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

    mybuttonTop.addEventListener("click", event =>{
        TopFunction();
    })

    mybuttonToggle.addEventListener("click", event =>{
        console.log("click")
        ChangeLight();
    })

})

// When the user clicks on the button, scroll to the top of the document
function TopFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function ChangeLight() {
    var element = document.querySelector("body");
    console.log(element);
    element.classList.toggle("dark-theme");
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