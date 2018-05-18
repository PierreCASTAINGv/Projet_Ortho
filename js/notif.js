// format date = 2018-05-07 soit : AAAA-MM-JJ
// format heure = 13:37 soit HH:MM

jourRDV="2018-05-08-16:52";

function notification(){

    //defini l'heure et la date actuelle 
    var minute = new Date().getMinutes();
    var heure = new Date().getHours(); ;
    var jour = new Date().getDate() ;
    var mois = parseInt(new Date().getMonth()+1) ;
    var année= new Date().getFullYear() ;
    
    // mise au format du mois et de la date 
    if(mois.length == 1); {
        mois = '0' + mois;
    }
    if(jour.length == 1); {
        jour = '0' + jour;
    }
    if(heure.length == 1); {
        jour = '0' + jour;
    }
    if(minute.length == 1); {
        jour = '0' + jour;
    }

    // date actuelle en minutes
    var actuel= parseInt(année)*525600 +  parseInt(mois)*43800 + parseInt(jour)*1440 + parseInt(heure)*60 + parseInt(minute);

    // Date du prochain rdv en minutes
    var rdv= parseInt(jourRDV.substr(0,4))*525600 +  
    parseInt(jourRDV.substr(5,2))*43800 + 
    parseInt(jourRDV.substr(8,2))*1440 + 
    parseInt(jourRDV.substr(11,2))*60 +
    parseInt(jourRDV.substr(14,2));

    switch(rdv-actuel){
        case 120  : // 2H avant
            alert("Ton rdv aura lieu dans 2h")
            break
        case 480: // 8H avant
            alert("Ton rdv aura lieu dans 8h")
            break
        case 1440: // 24H avant
            alert("Ton rdv aura lieu dans 24h")
            break
        case 2880: // 48H avant
            alert("Ton rdv aura lieu dans 48h")
            break
    }
    setTimeout(notification,60000);// appelle la fonction toute les minutes 
} 
