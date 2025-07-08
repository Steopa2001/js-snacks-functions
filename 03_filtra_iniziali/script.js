/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const initialLetter = (arrayWords, letter) => {
  const filter = arrayWords.filter(word => word[0] === letter);
  return filter;
};

// Invoca la funzione qui e stampa il risultato in console
const result = initialLetter(names, 'A');

console.log(result);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]