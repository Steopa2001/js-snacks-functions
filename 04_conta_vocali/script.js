/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const contaVocali = (str) => {
  //definisco le vocali da cercare 
  const vocali = ['a', 'e', 'i', 'o', 'u'];

//inizializzo un contatore a 0
let count = 0;

//creo un ciclo su ogni lettera della stringa 
for (let i = 0; i < str.length; i++) {
  //metto in minuscolo la lettera 
  const letter = str[i].toLowerCase();

  //controllo se la lettera è una vocale 
  if (vocali.includes(letter)) {
    count++;
   }
}
  //restituisco il numero totale di vocali trovate 
  return count;
};


// Invoca la funzione qui e stampa il risultato in console
const result = contaVocali(word);

console.log(`${result} (a, a, i)`);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)