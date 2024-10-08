/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/*
const num1 = 30;
const num2 = 50;

if (num1 > num2) {
  console.log("il numero maggiore è:", num1);
} else num1 < num2;
{
  console.log("il numero maggiore è:", num2);
}

*/

/*___________________________________________________________*/

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/*
const num1 = 10;

if (num1 !== 5) {
  console.log("notEqual");
}
*/

/*__________________________________________________________*/

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/*

const num = 10;

if (num % 5 === 0) {
  console.log("divisibile per 5");
}

*/

/*____________________________________________________________*/

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*
const num1 = 4;
const num2 = 4;

if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || num1 - num2 === 8) {
  console.log("il numero inserito è uguale a 8");
} else {
  console.log("il numero inserito non è uguale a 8");
}
  */

/*_____________________________________________________________*/

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*
const totalShoppingCart = 30;

if (totalShoppingCart > 50) {
  console.log("spedizione gratuita");
} else totalShoppingCart <= 50;
{
  console.log("carrello", totalShoppingCart + 10);
}
*/

/*___________________________________________________________*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/*
const totalShoppingCart = 30;
const sconto = totalShoppingCart * 0.2;

if (totalShoppingCart - sconto === 50) {
  console.log("spedizione gratuita");
} else totalShoppingCart - sconto <= 50;
{
  console.log("carrello", totalShoppingCart + 10);
}
*/

/*__________________________________________________________*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/*
let num1 = 10;
let num2 = 20;
let num3 = 30;

if (num1 > num2 && num1 > num3 && num2 > num3) {
  console.log("l'ordine sarà:", num1, num2, num3);
}
if (num2 > num1 && num2 > num3 && num3 > num1) {
  console.log("l'ordine sarà:", num2, num3, num1);
}
if (num3 > num2 && num3 > num1 && num1 > num2) {
  console.log("l'ordine sarà:", num3, num1, num2);
}


?????????

  */

/*_____________________________________________________*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/*
const valore = 1;

if (typeof valore === "number" && !isNaN(valore)) {
  console.log("Il valore è un numero.");
} else {
  console.log("Il valore non è un numero.");
}

*/

/*___________________________________________________ */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/*
const num1 = 10;

if(num1 % 2 === 0){
  console.log("il numero è pari")
}else{
  console.log("il numero è dispari")
}

*/

/* ______________________________________________________*/

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


    ??????????
*/

/* _____________________________________________________________ */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/*
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
  city: "Toronto",
};

console.log(me);

*/

/* ____________________________________________________________ */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/*
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
  city: "Toronto",
};

console.log(me);

delete me.lastName;

*/

/* ____________________________________________________ */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/*
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
  city: "Toronto",
};

me.skills.pop();
console.log(skills);

????????

*/

/* ___________________________________________________________ */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/*const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*___________________________________________________*/

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/*
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const num = num.splice(10, 100);

*/
