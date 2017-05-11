

var valeur1,valeur2,reste_division;
valeur1=parseInt(prompt('Entrez le numérateur:'));
valeur2=parseInt(prompt('Entrez le dénominateur'));
// function reste_division(){
//     reste_division=valeur1%valeur2;
//     return reste_division();}
//     alert('Le reste de la division est de'+' '+reste);
//     //Exercice 12(exo6  jp) CDans un fichier séparé, créer une fonction permettant d’afficher le reste de leur division. L’appeler depuis le fichier html

    function restedivision(valeur1, valeur2){
        // restedivision=valeur1%valeur2;
        return restedivision();
    }
    document.write(valeur1%valeur2); //il faut mettre le formule dans document.write mais pas dans fonction
    // alert(reste_division);
    // window.reste_division(valeur1, valeur2);
