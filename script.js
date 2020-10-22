// Creo una variabile elemento per il bottone e l'array
var buttonEl = document.getElementById('buttonSubmit');
var email = ['ciao', 'come', 'stai'];

// Creo l'azione click e prendo il valore dell'email
buttonEl.addEventListener('click', function() {
    var emailBoxEl = document.getElementById('emailBox').value;
    // Creo il ciclo di verifica del valore inserito con i valori nell'array    
    var message = 'Elemento non trovato'


    for (i = 0; i < email.length; i++) {
        if (email[i] == emailBoxEl) {
            message = 'Elemento trovato'
        }
    }


    alert(message);
})


var userDiceEl = document.getElementById('userDice');
var pcDiceEl = document.getElementById('pcDice');
var diceBtnEl = document.getElementById('diceBtn');
var messageDiceEl = document.getElementById('diceMessage');


diceBtnEl.addEventListener('click', function() {
    // Creo il numero randomico dei dadi per l'utente
    var randomDiceEl = Math.floor((Math.random() * 6) + 1);
    userDiceEl.innerHTML = randomDiceEl;
    //Creo il numero randomico dei dadi per il pc
    var randomDiceEl2 = Math.floor((Math.random() * 6) + 1);
    pcDiceEl.innerHTML = randomDiceEl2;

    if (randomDiceEl > randomDiceEl2) {
        messageDiceEl.innerHTML = 'Hai vinto! Congratulazioni!'
    } else if (randomDiceEl2 > randomDiceEl) {
        messageDiceEl.innerHTML = 'Hai perso. Il computer ha vinto :('
    } else if (randomDiceEl == randomDiceEl2) {
        messageDiceEl.innerHTML = 'Ops avete pareggiato! Ritenta!'
    }

})