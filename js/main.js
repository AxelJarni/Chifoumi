//Few variables used
var scores = {
    "user" : 0,
    "cpu" : 0
};

var choices = ["pierre", "feuille", "ciseaux"];

//Few functions
function getUserName(){
    //Asking for player's name (userName)
    var name = prompt("Quel est ton nom ?");

    //Added userName length condition
    while (name.length < 2 || name.length > 20){
        //fix used when i had a loop problem on the >20 condtion. Delete "if" and "else if" conditions, if you want to use.
            //userName = prompt("Calme toi, je veux juste un nom entre 2 et 20 caractères !");
        if (name.length < 2){
            name = prompt("C'est pas un nom ça, c'est une lettre.\nConcentre toi, fais un effort.");
        }
        else if (name.length > 20){
            name = prompt("Je t'ai demandé un nom, pas un roman !\nT'as pas un petit surnom ?");
        }
    };
    return name;
}

function getUserChoice(){
    //Getting Player's choice
    var choice = prompt("Fais ton choix :\nPierre, Feuille ou Ciseaux ?").toLowerCase();

    //Making sure that the Player's choice is of a correct input
    while (choice !== "pierre" && choice !== "feuille" && choice !== "ciseaux"){
        choice = prompt("Tu as paniqué ? Vérifie bien ton choix avant de valider.\nPierre, Feuille ou Ciseaux ?").toLowerCase();
    };
return choice;
}

function getCPUChoice(){
    //Getting CPU's choice
    var randomChoice = Math.floor(Math.random()*choices.length);

    //Turning CPU's choice into a string value
    if (randomChoice === 2){
        randomChoice = "pierre";
    }
        else if (randomChoice === 1){
            randomChoice = "feuille";
        }
    else {
        randomChoice = "ciseaux";
    };
return randomChoice;
}

function displayResult(){
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
return displayResult;
}

function finalResult(){
    if (scores["user"] === 3){
        alert("Fatal error. Le programme s'est brusquement arrêté.\nTout les scores ont étés perdus, il n'y a donc aucun gagnant\nEn tout cas surement pas toi " + userName + " ...");
    }
    else if (scores["cpu"] === 3){
        alert("Tu as perdu " + userName + " , ton contrat de travail se termine là.\nRetourne directement à la maison ne passe pas par la case RH");
    }
    return finalResult;
}

//Showing a welcome message
alert("Bienvenue dans l'antre du Chifoumi, veux-tu jouer avec moi?");

userName = getUserName();

alert("Attention " + userName + " es tu sûr de vouloir te mesurer à moi ?");

while (scores["user"] < 3 && scores["cpu"] < 3) {

    userChoice = getUserChoice();

    cpuChoice = getCPUChoice();

    //Display CPU's choice
    alert("Hum, je choisis : " + cpuChoice);

    displayResult();
    //Displaying the current score
    alert("Le score est actuellement de :\n" + userName + " : " + scores["user"] + "\nOrdinateur : " + scores["cpu"]);
}
finalResult();