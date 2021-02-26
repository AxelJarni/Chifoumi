# **Chifoumi**

## **Description et règles du jeu**

Les consignes du jeu sont très simples. Les deux joueurs choisissent entre pierre, feuille
et ciseaux puis on détermine qui a gagné la manche selon la règle suivante :
- La pierre bat les ciseaux
- La feuille bat la pierre
- Les ciseaux battent la feuille

======================

### Spécifications fonctionnelles

- Le joueur arrive sur le site, il voit un message d’accueil
- Le joueur peut ensuite indiquer son nom à la machine, ce nom est utilisé ensuite pour s’adresser au joueur
- Le joueur peut choisir entre les valeurs pierre, feuille ou ciseaux en tapant la valeur choisie
- L'ordinateur choisit à son tour de manière aléatoire et affiche son choix
- Une fois les deux choix effectués, on annonce le vainqueur

======================

### Spécifications techniques

- Le projet est codé dans une base boilerplate qui respecte les standards de l’industrie
- Le JavaScript est dans un fichier séparé
- Le code est commenté, indenté, lisible et maintenable
- Le jeu est accessible via un fichier index.html
- Le code du projet est disponible sur un repository GitHub
- Le projet est hébergé sur une gh page
- Le repository contient un fichier README, une description, des mots clef et des commits

======================

#### Pour aller plus loin :
- Faites jouer la partie en plusieurs manches, le jeu continue tant que personne n’a atteint trois 
victoires. Il vous faudra donc compter les points.
- Vérifiez les saisies utilisateur. Vous vous assurerez que le nom du jou eur fait entre 2 et 20 
caractères et qu’il choisit bien pierre, feuille ou ciseau et non pier ou autre chose par exemple. 
Attention par contre sa saisie est insensible à la casse, c’est à dire que PIERRE est une saisie valide.
- Permettez au joueur de rejo uer une fois la partie finie
- Organisez au maximum votre code en fonctions
