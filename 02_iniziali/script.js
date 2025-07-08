/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
const newArrayInitial = (arrayNomi) => {
  const initialWords = arrayNomi.map(nome => nome[0]);
  return initialWords;
};


// Invoca la funzione qui e stampa il risultato in console
const result = newArrayInitial(names);

console.log(result);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]