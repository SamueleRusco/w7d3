let tempo = document.getElementById("counter");
let variabile = 0;
const bottone = document.querySelector("button");

setInterval(timeIncrease, 1000);

function timeIncrease() {
  variabile++;
  tempo.innerHTML = variabile;
}
