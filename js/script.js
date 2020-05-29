// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// chiedo all'utente di inserire una parola
var inserisciParola = prompt('Inserisci una parola');

// variabile della funzione
var parolaGirata = palindroma(inserisciParola);

// stampa se la parola inserita è palindroma o meno
if (inserisciParola === parolaGirata) {
  console.log('la parola è palindroma');
}else {
  console.log('la parola non è palindroma');
}

// FUNZIONE PAROLA PALINDROMA
function palindroma (parola) {
  var arrayParola = parola.split('');
  arrayParola.reverse();
  var parolaGirata = arrayParola.join('');

  return parolaGirata;
}
