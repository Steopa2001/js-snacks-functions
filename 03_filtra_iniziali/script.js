/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const initialLetter = (arrayWords, letter) => {
  const filter = [];

  for (let i = 0; i < arrayWords.length; i++){
    if (names[i][0].toLowerCase() === letter.toLowerCase()) {
      filter.push(arrayWords[i]);
    }
  }

  return filter;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(initialLetter(names, 'a'));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]