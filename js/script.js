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

//variabili;
var scegliPOD;
var numeroUtente;
var numeroComputer;
var message;
var somma;

// l'utente sceglie pari o dispari
scegliPOD = prompt('Scegli pari o dispari');
while ((!isNaN(scegliPOD)) || (scegliPOD != ('pari') && scegliPOD != ('dispari'))) {
  scegliPOD = prompt('Scegli pari o dispari');
}
message = 'Hai scelto ' + scegliPOD;
console.log(message);

// l'utente sceglie un numero da 1 a 5
numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
while ((isNaN(numeroUtente)) || ((numeroUtente > 5) || (numeroUtente === 0))) {
  numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
}
message = 'Hai scelto ' + numeroUtente;
console.log(message);

// il computer genera un numero casuale da 1 a 5
numeroComputer = nRandom1To5(1, 5);
message = 'Il computer ha scelto ' + numeroComputer;
console.log(message);

// somma dei numeri scelti
somma = numeroUtente + numeroComputer;
message = 'la somma dei numeri è ' + somma;
console.log(message);

// vince chi indovina se la somma dei numeri è pari o dispari
if (isPOD(somma) === scegliPOD) {
  message = 'hai vinto';
}else {
  message = 'hai perso';
}
console.log(message);

// FUNZIONE NUMERO RANDOM DA 1 A 5
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
