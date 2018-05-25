function edit(lui){
    let texte = lui.querySelector("p");
    console.log(texte.innerHTML);
    var divtest = document.createElement('div');
    divtest.id= 'modification';
    divtest.innerHTML= '<input type="text" name="nom" value="'+texte.innerHTML+'" id="champ"><div id="valid">Ok</div>';
    document.body.appendChild(divtest);
    /*document.querySelector('body').insertAdjacentHTML('beforeEnd', `
        <div id='modification'>
            <input type="text" name="nom" placeholder="bonjour bonjour" id="champ">
            <div id='valid' onclick='modif(lui)'>Ok</div>
        </div>`
    );*/
    document.querySelector('#modification').style.backgroundColor ="rgba(0, 0, 0, 0.900)";
    document.querySelector('#modification').style.width ="70vw";
    document.querySelector('#modification').style.height ="40vh";
    document.querySelector('#modification').style.position ="absolute";
    document.querySelector('#modification').style.top ="25vh";
    document.querySelector('#modification').style.right ="15vw";
    document.querySelector('#modification').style.color ="white";
    document.querySelector('#modification').style.textAlign ="center";
    document.querySelector('#modification').style.borderRadius ="10px";

    document.querySelector('#valid').style.width ="10vw";
    document.querySelector('#valid').style.height ="4vh";
    document.querySelector('#valid').style.margin ="10vh 30vw";
    document.querySelector('#valid').style.backgroundColor ="rgb(24, 24, 24)";
    document.querySelector('#valid').style.borderRadius ="3px";
    document.querySelector('#valid').style.paddingTop ="10px";

    document.querySelector('input').style.margin ="10vh 0";
    document.querySelector('input').style.width ="60vw";

    document.querySelector('#valid').onclick = function (){
        let input = document.querySelector('#champ').value;
        divtest.remove();
        texte.innerText = input;
    }
}

