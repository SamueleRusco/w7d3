let tempo = document.getElementById("counter");
let ultimaSessioneCounter = document.getElementById("counterGlobal");
let variabile = localStorage.getItem("tempoGlobal");

const bottone = document.querySelector("button");

setInterval(timeIncrease, 1000);

function timeIncrease() {
  variabile = sessionStorage.getItem("tempo");
  variabile++;

  tempo.innerHTML = variabile;
  localStorage.setItem("tempoGlobal", variabile);
  sessionStorage.setItem("tempo", variabile);
}

window.onload = (event) => {
  function counterSessione() {
    ultimaSessioneCounter.innerHTML = getItem("tempoGlobal", variabile);
  }
};
