// // ESERCIZIO PALINDROMO
// // Chiedere all’utente di inserire una parola
// // Creare una funzione per capire se la parola inserita è palindroma
//
// // chiedo all'utente di inserire una parola
// var inserisciParola = prompt('Inserisci una parola');
//
// // variabile della funzione
// var parolaGirata = palindroma(inserisciParola);
//
// // stampa se la parola inserita è palindroma o meno
// if (inserisciParola === parolaGirata) {
//   console.log('la parola è palindroma');
// }else {
//   console.log('la parola non è palindroma');
// }
//
// // FUNZIONE PAROLA PALINDROMA
// function palindroma (parola) {
//   // trasformo la stringa in un array
//   var arrayParola = parola.split('');
//
//   // cambio il verso della parola
//   arrayParola.reverse();
//
//   // trasformo l'array in una stringa
//   var parolaGirata = arrayParola.join('');
//
//   return parolaGirata;
// }

////////////////////////////////////////////////////

// ESERCIZIO PARI O DISPARI
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// FUNZIONE NUMERO RANDOM DA num A num
function nRandom1To5(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// FUNZIONE PARI O DISPARI
function isPOD(pod) {
  if (pod % 2 === 0) {
    var pariODispari = 'pari';
  }else {
    pariODispari = 'dispari';
  }

  return pariODispari;
}

// VAR BOTTONI
var avvia = document.getElementById('avvia');
var annulla = document.getElementById('annulla');

// VARIABILI
var scegliPOD = document.getElementById('scegli-pod');
var numeroUtente = document.getElementById('numero-utente');
var resultPOD = document.getElementById('result-pod');
var resultNumUtente = document.getElementById('result-num-utente');
var resultNumComputer = document.getElementById('result-num-computer');
var resultSomma = document.getElementById('result-somma');
var winLose = document.getElementById('win-lose');

var numeroComputer;
var somma;

avvia.addEventListener('click',
  function() {

    // l'utente sceglie pari o dispari
    if ((!isNaN(scegliPOD.value)) || (scegliPOD.value != ('pari') && scegliPOD.value != ('dispari'))) {
      resultPOD.innerHTML = 'Campo errato';
    }else {
      resultPOD.innerHTML = 'Hai scelto: ' + scegliPOD.value;
    }


    // l'utente sceglie un numero da 1 a 5
    if ((isNaN(numeroUtente.value)) || ((numeroUtente.value > 5) || (numeroUtente.value == 0))) {
      resultNumUtente.innerHTML = 'Campo errato';
    }else {
      resultNumUtente.innerHTML = 'Hai scelto: ' + numeroUtente.value;
    }

    // il computer genera un numero casuale da 1 a 5
    numeroComputer = nRandom1To5(1, 5);
    resultNumComputer.innerHTML ='Il computer ha scelto: ' +  numeroComputer;

    // somma dei numeri scelti
    if (somma = parseInt(numeroUtente.value) + numeroComputer) {
      resultSomma.innerHTML = 'La somma dei numeri è: ' + somma;
    }else {
      resultSomma.innerHTML = 'Completare i campi per avere un risultato.';
    }


    // vince chi indovina se la somma dei numeri è pari o dispari
    if (isPOD(somma) === scegliPOD.value) {
      winLose.innerHTML = 'HAI VINTO!';
    }else {
      winLose.innerHTML = 'HAI PERSO!';
    }
  }
);

annulla.addEventListener('click',
function() {
  scegliPOD.value = '';
  numeroUtente.value = '';

  resultPOD.innerHTML = '';
  resultNumUtente.innerHTML = '';
  resultNumComputer.innerHTML = '';
  resultSomma.innerHTML = '';
  winLose.innerHTML = '';
}
);
