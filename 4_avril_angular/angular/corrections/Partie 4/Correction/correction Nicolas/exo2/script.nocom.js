function numberTheGame() {
    var boolResult = false;
    var myResultSpan = document.getElementById('resultNumberTheGame');
    var nombreCoup = 0;
    const nombreMagique = Math.floor((Math.random() * 100) + 1);
    while (boolResult == false) {
        userInput = prompt('Entrer un résultat pour le nombre mystère') | 0;
        if (userInput == nombreMagique) {
            alert('Gagner le nombre magique était ' + nombreMagique + '. Nombre de coup : ' + nombreCoup);
            boolResult = true;
            return myResultSpan.innerHTML += 'Gagner le nombre magique était ' + nombreMagique;
        } else {
            if (userInput > nombreMagique) {
                alert('Vous avez entré :' + userInput + ' Le nombre mystère est plus petit que ça');
                nombreCoup++;

            } else if (userInput < nombreMagique) {
                alert('Vous avez entré :' + userInput + ' Le nombre mystère est plus grand que ça');
                nombreCoup++;

            } else {
                alert('Vous avez entré :' + userInput + ' Le nombre mystère est en erreur ');
                nombreCoup++;

            }
        }
    }
}