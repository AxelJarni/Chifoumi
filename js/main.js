//Showing a welcome message
alert("Bienvenue dans l'antre du Chifoumi, voulez vous jouer avec moi?");

//Asking for player's name (userName)
var userName = prompt("Quel est ton nom ?");

//Taunting the player
alert("Attention " + userName + " es tu sûr de vouloir te mesurer à moi ?");

//Getting Player's choice and CPU's choice
var userChoice = prompt("Fais ton choix :\nPierre, Feuille ou Ciseaux ?" ).toLowerCase();

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

alert("Hum, je choisis : " + cpuChoice);

//Comparing choices and giving the results
if (cpuChoice === userChoice){
    alert("Egalité !\nPas de perdants,ni de gagnants.");
}
else if ((cpuChoice === "feuille" && userChoice === "ciseaux") || (cpuChoice === "pierre" && userChoice === "feuille") || (cpuChoice === "ciseaux" && userChoice === "pierre")){
    alert("Bien joué, tu as gagné " + userName);
}
else {
    alert("T'as perdu. T'es qu'une merde " + userName + " !");
}