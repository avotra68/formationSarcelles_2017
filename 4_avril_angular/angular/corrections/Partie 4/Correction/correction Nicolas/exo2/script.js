function numberTheGame() {
    // Definition de la variable pour la boucle a false
    var boolResult = false;

    //Definition de l'élement du DOM ou afficher le resultat
    var myResultSpan = document.getElementById('resultNumberTheGame');

    //Definition du nombre de coups
    var nombreCoup = 0;

    //Definition du nombre magique
    const nombreMagique = Math.floor((Math.random() * 100) + 1);

    //Debut de la boucle; Tant que boolResult = faux alors recommencer
    while (boolResult == false) {

        // On demande a l'utilisateur d'entrer un nombre magique dans la boucle Pour redemander en cas d'erreur
        userInput = prompt('Entrer un résultat pour le nombre mystère') | 0;
        //On verifie si l'entré utilisateur correspond à notre nombre

        if (userInput == nombreMagique) {
            //Si Vrai alors
            alert('Gagner le nombre magique était ' + nombreMagique + '. Nombre de coup : ' + nombreCoup);

            //On passe la variable boolResult à true (VRAI) pour arreter la boucle car le jeux est fini
            boolResult = true;

            //Affichage dans le DOM
            return myResultSpan.innerHTML += 'Gagner le nombre magique était ' + nombreMagique + '. Nombre de coup : ' + nombreCoup;

            //Si nombre non trouver ALORS
        } else {
            //Si plus petit ALORS
            if (userInput > nombreMagique) {
                alert('Vous avez entré :' + userInput + ' Le nombre mystère est plus petit que ça');
                nombreCoup++;

                //Si plus grand ALORS
            } else if (userInput < nombreMagique) {
                alert('Vous avez entré :' + userInput + ' Le nombre mystère est plus grand que ça');
                nombreCoup++;

                //Sinon
            } else {
                alert('Vous avez entré :' + userInput + ' Le nombre mystère est en erreur ');
                nombreCoup++;

            }
        }
    }
}