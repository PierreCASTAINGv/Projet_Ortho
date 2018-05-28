function edit(lui){
    let texte = lui.querySelector("p");
    console.log(texte.innerHTML);
    var divtest = document.createElement('div');
    divtest.id= 'modification';
    /*faire une modif pour changer dynamiquement le text du label en fonction du champ choisi*/
    divtest.innerHTML= '<label> Modifie un champ</label> <input type="text" name="nom" value="'+texte.innerHTML+'" id="champ"><div id="valid">Ok</div>';
    document.body.appendChild(divtest);
    /*document.querySelector('body').insertAdjacentHTML('beforeEnd', `
        <div id='modification'>
            <input type="text" name="nom" placeholder="bonjour bonjour" id="champ">
            <div id='valid' onclick='modif(lui)'>Ok</div>
        </div>`
    );*/
    document.querySelector('main').style.opacity ="0.1";
    
    document.querySelector('#modification').style.backgroundColor ="rgba(81, 85, 82, 1)";
    document.querySelector('#modification').style.width ="70vw";
    document.querySelector('#modification').style.height ="20vh";
    document.querySelector('#modification').style.position ="absolute";
    document.querySelector('#modification').style.top ="25vh";
    document.querySelector('#modification').style.right ="15vw";
    document.querySelector('#modification').style.color ="white";
    document.querySelector('#modification').style.textAlign ="center";
    document.querySelector('#modification').style.borderRadius ="10px";

    document.querySelector('#valid').style.width ="50vw";
    document.querySelector('#valid').style.height ="5vh";
    document.querySelector('#valid').style.margin ="-2vh 10vw";
    document.querySelector('#valid').style.backgroundColor ="rgba(183, 213, 223,1)";
    document.querySelector('#valid').style.borderRadius ="10px";
    document.querySelector('#valid').style.paddingTop ="10px";
    document.querySelector('#valid').style.padding =" 0vh 0vw -2vh 0vw";

    document.querySelector('input').style.margin ="4vh 0";
    document.querySelector('input').style.width ="60vw";

    document.querySelector('#valid').onclick = function (){
        let input = document.querySelector('#champ').value;
        document.querySelector('main').style.opacity ="1";
        divtest.remove();
        texte.innerText = input;
    }
}

