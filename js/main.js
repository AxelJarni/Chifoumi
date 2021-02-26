var scores = {
    "user" : 0,
    "cpu" : 0
};

//Showing a welcome message
alert("Bienvenue dans l'antre du Chifoumi, veux-tu jouer avec moi?");

//Asking for player's name (userName)
var userName = prompt("Quel est ton nom ?");

//Added userName length condition
while (userName.length < 2 || userName.length > 20){
    //fix used when i had a loop problem on the >20 condtion. Delete "if" and "else if", if you want to use.
    //userName = prompt("Calme toi, je veux juste un nom entre 2 et 20 caractères !");
    if (userName.length < 2){
        userName = prompt("C'est pas un nom ça, c'est une lettre.\nConcentre toi, fais un effort.");
    }
    else if (userName.length > 20){
        userName = prompt("Je t'ai demandé un nom, pas un roman !\nT'as pas un petit surnom ?");
    }
};

//Taunting the player
alert("Attention " + userName + " es tu sûr de vouloir te mesurer à moi ?");

//Getting Player's choice
var userChoice = prompt("Fais ton choix :\nPierre, Feuille ou Ciseaux ?" ).toLowerCase();

//Making sure that the Player's choice is of a correct input
while (userChoice !== "pierre" && userChoice !== "feuille" && userChoice !== "ciseaux"){
    userChoice = prompt("Tu as paniqué ? Vérifie bien ton choix avant de valider.");
};

//Getting CPU's choice
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

//Display CPU's choice
alert("Hum, je choisis : " + cpuChoice);

//Comparing choices and giving the results
if (cpuChoice === userChoice){
    alert("Egalité !\nPas de perdants,ni de gagnants.");
}
else if ((cpuChoice === "feuille" && userChoice === "ciseaux") || (cpuChoice === "pierre" && userChoice === "feuille") || (cpuChoice === "ciseaux" && userChoice === "pierre")){
    alert("Bien joué, tu as gagné " + userName);
    scores["user"] += 1;
}
else {
    alert("T'as perdu. T'es qu'une merde " + userName + " !");
    scores["cpu"] += 1;
}

//Displaying the current score
alert("Le score est actuellement de :\n" + userName + " : " + scores["user"] + "\nOrdinateur : " + scores["cpu"]);