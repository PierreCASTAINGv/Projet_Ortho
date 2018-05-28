document.querySelector("#send").onclick = function(){
    clic();
};

document.onkeydown = function(event) {
    var key_pressed; 
    if(event == null){
        key_pressed = window.event.keyCode; 
    }
    else {
        key_pressed = event.keyCode; 
    }
    if (key_pressed==13){
        clic()
    }
}
function clic(){
    let message = document.querySelector('textarea').value;
    if(message !=""){
        document.querySelector('#chat').insertAdjacentHTML('beforeEnd',`<article class="me">${message}</article>` );
        document.querySelector('textarea').value = "";
        let regex = RegExp("bonjour");
        let regex2 = RegExp("prochain");
        let regex3 = RegExp("merci");
        let regex4 = RegExp("photo");
        if(regex.test(message)){
            document.querySelector('#chat').insertAdjacentHTML('beforeEnd', `<article class="him">Bonjour, comment puis-je vous aider?</article>`);
        }
        else if(regex2.test(message)){
            document.querySelector('#chat').insertAdjacentHTML('beforeEnd', `<article class="him">Le prochain rendez-vous disponible est demain à 8h30</article>`);
        }
        else if(regex3.test(message)){
            document.querySelector('#chat').insertAdjacentHTML('beforeEnd', `<article class="him">Au revoir</article>`);
        }
        else if (regex4.test(message)){
            document.querySelector('#chat').insertAdjacentHTML('beforeEnd', `<article class="him">Bien sur, voila vos photos <img src="../img/download.png"></article>`);
        }
    }
}