var panel1 = document.querySelector("ul.panel1");
var panel2 = document.querySelector("ul.panel2");

function afficherRDV() {
    panel2.classList.remove("panel4");
    panel1.classList.remove("panel5");
    panel1.classList.toggle("panel3");
    panel2.classList.toggle("panel6");
    
}

function afficherP() {
    panel1.classList.remove("panel3");
    panel2.classList.remove("panel6");
    panel2.classList.toggle("panel4");
    panel1.classList.toggle("panel5");
}