// Scrivi un programma che stampi in console i numeri da 1 a 100.
// MILESTONE 1
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// MILESTONE 2
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
// MILESTONE 3
// Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare? Come creare nuovi elementi html e appenderli al container?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:

 const list = document.querySelector(".list")

//crea i numeri da 1 a 100
for(let i = 1; i <= 100; i++) {
    const item = document.createElement("li"); // creato elemento <li></li>
    item.classList.add("item") // aggiunta classe .item ad elemento li
    // diamo un contenuto ad elemento li
    // per i numeri multipli di 3 e di 5 stampa fizzbuzz
    if(  i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
        item.innerText = "FizzBuzz";
        item.classList.add("FizzBuzz")
    
// per i numeri multipli di 3 stampa fizz
    } else if ( i % 3 === 0 ){
        console.log("fizz");
        item.innerText = "Fizz";
        item.classList.add("Fizz")
// per i numeri multipli di 5 stampa buzz
    } else if  (i % 5 === 0 ){
        console.log("buzz");
        item.innerText = "Buzz";
        item.classList.add("Buzz");
        
// per gli altri numeri stampa solo il numero
    } else {
       console.log(i);
       item.innerText = i;
    } 
    // aggiungo elementi con append per non sovrascriverli
    list.append(item)
}

// oggetto.innerhtml += "<div class='item></div>'"
//     if
