//Showing a welcome message
alert("Bienvenue dans l'antre du Chifoumi, voulez vous jouer avec moi?");

//Asking for player's name (userName)
var userName = prompt("Quel est ton nom ?");

//Taunting the player
alert("Attention " + userName + " es tu sûr de vouloir te mesurer à moi ?");

//Getting Player's choice and CPU's choice
var userChoice = prompt("Fais ton choix :\nPierre, Feuille ou Ciseaux ?" );

var cpuChoice = Math.floor(Math.random()*3);

//Turning CPU's choice into a string value
if (cpuChoice === 2){
    cpuChoice = "pierre";
}
    else if (cpuChoice === 1){
    cpuChoice = "feuille";
}
else {
    cpuChoice = "ciseaux";
};
