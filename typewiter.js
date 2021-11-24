window.addEventListener("load", function(event){
    const title = this.document.querySelector('#Gtitle');
    const txt = "I am a developer";
    
    function typewriter(word, index){
        if(index < word.length) {
            setTimeout(() =>{
                title.innerHTML += `<span>${word[index]}</span>`;
                typewriter(txt, index + 1);
            }, 300)
        }
    }

    setTimeout(() => {
        typewriter(txt, 0);
    }, 500)


});