// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana 


const distanzaDaPercorrere = prompt("Quanti chilometri vuoi fare?");
const etaPasseggero = prompt("Quanti anni hai?");
const scontoUnder18 = 0.2;
const scontoOver65 = 0.4;
const prezzo1Km = 0.21;
//const prezzoSenzasconti = prezzo1Km * distanzaDaPercorrere;
const prezzoSenzasconti = Math.round(prezzo1Km * distanzaDaPercorrere).toFixed(2); 
let scontoApplicato;
let prezzoScontato;



if(etaPasseggero < 18){
    scontoApplicato = prezzoSenzasconti * scontoUnder18;
    prezzoScontato = Math.round(prezzoSenzasconti - scontoApplicato).toFixed(2);

}else if(etaPasseggero > 65){
    scontoApplicato = prezzoSenzasconti * scontoOver65;
    prezzoScontato = Math.round(prezzoSenzasconti - scontoApplicato).toFixed(2);

}else if(etaPasseggero > 18 && etaPasseggero < 65){
    prezzoScontato = prezzoSenzasconti;
}

document.getElementById("output").innerHTML = `
 Il prezzo del tuo biglietto è: ${prezzoScontato} euro
`