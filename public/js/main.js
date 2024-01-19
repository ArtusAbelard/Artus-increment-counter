let compteur = 0;
let incrementation1 = 0;
let incrementation2 = 0;
let interval
let interval1
let interval2
let compteur0 = document.getElementById('compteur');
let compteur1 = document.getElementById('compteur1')
let compteur2 = document.getElementById('compteur2')

function start() {
    interval = setInterval(() => {
    if (compteur < 12000) {
        compteur+=50;
        compteur0.innerHTML = compteur;
    } else {clearInterval(interval)}},1);
}
function start1() {
    interval1 = setInterval(() => {
    if (incrementation1  < 5000) {
        incrementation1 +=20;
        compteur1.innerHTML = incrementation1;
    } else {clearInterval(interval1)}},1);
}
function start2() {
    interval2 = setInterval(() => {
    if (incrementation2 < 7500) {
        incrementation2+=30;
        compteur2.innerHTML = incrementation2;
    } else {clearInterval(interval2)}},1);
}




start()
start1()
start2()