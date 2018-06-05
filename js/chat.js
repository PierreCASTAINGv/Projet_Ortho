document.querySelector(".gn-icon-image").onclick = function(){
    clic();
};

document.onkeydown = function(event) {
    let key_pressed; 
    key_pressed  = window.event ? event.keyCode : event.which;
    if (key_pressed==13){
        clic()
    }
}
function clic(){
    let message = document.querySelector('textarea').value;
    if(message !=""){
        document.querySelector('.nb-main').insertAdjacentHTML('beforeEnd',`
        <div class="patient">
            <label>François</label>
            <p>${message}</p>
        </div>` );
        document.querySelector('textarea').value = "";
        let regex = RegExp("bonjour");
        let regex2 = RegExp("prochain");
        let regex3 = RegExp("merci");
        let regex4 = RegExp("photo");
        if(regex.test(message)){
            document.querySelector('.nb-main').insertAdjacentHTML('beforeEnd', `
            <div class="doct">
				<label>Doc Frezz</label>
				<p>Bonjour, comment puis-je vous aider?</p>
			</div>`);
        }
        else if(regex2.test(message)){
            document.querySelector('.nb-main').insertAdjacentHTML('beforeEnd', `
            <div class="doct">
				<label>Doc Frezz</label>
				<p>Le prochain rendez-vous disponible est demain à 8h30.</p>
			</div>`);
        }
        else if(regex3.test(message)){
            document.querySelector('.nb-main').insertAdjacentHTML('beforeEnd', `
            <div class="doct">
				<label>Doc Frezz</label>
				<p>Au revoir.</p>
			</div>`);
        }
        else if (regex4.test(message)){
            document.querySelector('.nb-main').insertAdjacentHTML('beforeEnd', `
            <div class="doct">
				<label>Doc Frezz</label>
				<p>Bien sur, voila vos photos.</p>
			</div>`);
        }
    }
}