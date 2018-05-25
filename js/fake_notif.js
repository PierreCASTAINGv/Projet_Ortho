var rdv= 6
notif()
function notif(){
    document.querySelector('body').insertAdjacentHTML('beforeEnd', `
        <div id='notification'>
            <p></p>
            <div id='ok' onclick='time()'>Ok</div>
        </div>`
    );
    document.querySelector('#notification').style.backgroundColor ="rgba(0, 0, 0, 0.900)";
    document.querySelector('#notification').style.width ="70vw";
    document.querySelector('#notification').style.height ="40vh";
    document.querySelector('#notification').style.position ="absolute";
    document.querySelector('#notification').style.top ="20vh";
    document.querySelector('#notification').style.right ="15vw";
    document.querySelector('#notification').style.color ="white";
    document.querySelector('#notification').style.textAlign ="center";
    document.querySelector('#notification').style.borderRadius ="10px";
    document.querySelector('#notification').style.color ="white";
    document.querySelector('#notification').style.textAlign ="center";

    document.querySelector('#ok').style.width ="10vw";
    document.querySelector('#ok').style.height ="4vh";
    document.querySelector('#ok').style.margin ="10vh 30vw";
    document.querySelector('#ok').style.backgroundColor ="rgb(24, 24, 24)";

    document.querySelector('#notification').querySelector('p').style.margin ="50px &0";
    time()
}

function time(){
    document.querySelector('#notification').style.top ="-600px";
    interval = setTimeout(ping,600000); // declenche la fonction "ping" toute les dix minutes 
}

function ping(){
    if (rdv==0){
        clearInterval(interval);
        document.querySelector('#notification p').innerText = `Bon rendez-vous :D`;
        document.querySelector('#notification').style.top ="10vh";
        document.querySelector('#notification').style.right ="15vw";
        return
    }
    document.querySelector('#notification').style.top ="10vh";
    document.querySelector('#notification').style.right ="15vw";
    document.querySelector('#notification p').innerText = `Votre rendez-vous débute dans ${rdv}0 minutes`;
    rdv--
}