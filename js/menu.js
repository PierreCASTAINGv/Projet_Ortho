setTimeout(menu,1);

function menu(){
    document.querySelector("header").classList.toggle("bouge");
    document.querySelector("main").classList.toggle("bouge");
    document.querySelector("#menu").classList.toggle("bouge");
}
function bloque(){
    document.querySelector("body").style.overflow=" hidden";
    menu();
}