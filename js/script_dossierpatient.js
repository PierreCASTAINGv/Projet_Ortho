var panel1 = document.querySelector("ul.panel1");
var panel2 = document.querySelector("ul.panel2");
var li = document.querySelector("li.il");
var de1 = document.getElementById("d1");
var de2 = document.getElementById("d2");
var de3 = document.getElementById("d3");
var de4 = document.getElementById("d4");
var de5 = document.getElementById("d5");
var de6 = document.getElementById("d6");

var li1 = document.getElementById("li1");
var li2 = document.getElementById("li2");
var li3 = document.getElementById("li3");
var li4 = document.getElementById("li4");
var li5 = document.getElementById("li5");
var li6 = document.getElementById("li6");

function afficherRDV() {
    panel2.classList.remove("panel4");
    panel1.classList.remove("panel5");
    panel1.classList.toggle("panel3");
    panel2.classList.toggle("panel6");

    li1.classList.remove("detail");
    li2.classList.remove("detail");
    li3.classList.remove("detail");
    li4.classList.remove("detail");
    li5.classList.remove("detail");
    li6.classList.remove("detail");

    de1.classList.remove("h3");
    de2.classList.remove("h3");
    de3.classList.remove("h3");
    de4.classList.remove("h3");
    de5.classList.remove("h3");
    de6.classList.remove("h3");
}

function afficherP() {
    panel1.classList.remove("panel3");
    panel2.classList.remove("panel6");
    panel2.classList.toggle("panel4");
    panel1.classList.toggle("panel5");

    li1.classList.remove("detail");
    li2.classList.remove("detail");
    li3.classList.remove("detail");
    li4.classList.remove("detail");
    li5.classList.remove("detail");
    li6.classList.remove("detail");

    de1.classList.remove("h3");
    de2.classList.remove("h3");
    de3.classList.remove("h3");
    de4.classList.remove("h3");
    de5.classList.remove("h3");
    de6.classList.remove("h3");
}

function d() { 
    li1.classList.toggle("detail");
    li2.classList.remove("detail");
    li3.classList.remove("detail");
    li4.classList.remove("detail");
    li5.classList.remove("detail");
    li6.classList.remove("detail");

    de1.classList.toggle("h3");
    de2.classList.remove("h3");
    de3.classList.remove("h3");
    de4.classList.remove("h3");
    de5.classList.remove("h3");
    de6.classList.remove("h3");
}

function de() {
    li1.classList.remove("detail");
    li2.classList.toggle("detail");
    li3.classList.remove("detail");
    li4.classList.remove("detail");
    li5.classList.remove("detail");
    li6.classList.remove("detail");

    de1.classList.remove("h3");
    de2.classList.toggle("h3");
    de3.classList.remove("h3");
    de4.classList.remove("h3");
    de5.classList.remove("h3");
    de6.classList.remove("h3");
}

function det() {
    li1.classList.remove("detail");
    li2.classList.remove("detail");
    li3.classList.toggle("detail");
    li4.classList.remove("detail");
    li5.classList.remove("detail");
    li6.classList.remove("detail");

    de1.classList.remove("h3");
    de2.classList.remove("h3");
    de3.classList.toggle("h3");
    de4.classList.remove("h3");
    de5.classList.remove("h3");
    de6.classList.remove("h3");
}

function deta() {
    li1.classList.remove("detail");
    li2.classList.remove("detail");
    li3.classList.remove("detail");
    li4.classList.toggle("detail");
    li5.classList.remove("detail");
    li6.classList.remove("detail");

    de1.classList.remove("h3");
    de2.classList.remove("h3");
    de3.classList.remove("h3");
    de4.classList.toggle("h3");
    de5.classList.remove("h3");
    de6.classList.remove("h3");
}

function detai() {
    li1.classList.remove("detail");
    li2.classList.remove("detail");
    li3.classList.remove("detail");
    li4.classList.remove("detail");
    li5.classList.toggle("detail");
    li6.classList.remove("detail");

    de1.classList.remove("h3");
    de2.classList.remove("h3");
    de3.classList.remove("h3");
    de4.classList.remove("h3");
    de5.classList.toggle("h3");
    de6.classList.remove("h3");
}

function detail() {
    li1.classList.remove("detail");
    li2.classList.remove("detail");
    li3.classList.remove("detail");
    li4.classList.remove("detail");
    li5.classList.remove("detail");
    li6.classList.toggle("detail");

    de1.classList.remove("h3");
    de2.classList.remove("h3");
    de3.classList.remove("h3");
    de4.classList.remove("h3");
    de5.classList.remove("h3");
    de6.classList.toggle("h3");
}
/*
var accordeon = document.querySelectorAll(".divin");

for(let p of accordeon){
    let titre = p.querySelector("h4");
    titre.onclick = function(e){
        console.log(e.target.nextSibling.nextSibling);
        e.target.nextSibling.nextSibling.classList.toggle("visible");

    }
} */
