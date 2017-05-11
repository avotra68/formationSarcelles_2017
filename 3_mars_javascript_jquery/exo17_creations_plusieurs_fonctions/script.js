/* Exercice 17 (exo9jp)  javascript : Demander à l’utilisateur sa pointure et son année de naissance. Créer une fonction qui fait les calculs suivants :

Multiplier la pointure par 2
Ajouter 5 au résultat
Multiplier le tout par 50
Soustraire l’année de naissance
Ajouter au tout 1766

La fonction doit retourner le résultat. Tester avec votre date de naissance et votre pointure. Attention : n'utiliser qu'une seule variable « resultat ».
*/
function mafonction() {
  var pointure=parseInt(prompt('entrez votre pointure'));
  var annee_naissance=parseInt(prompt('Vous êtes nées en quelle années'));
  var resultat;
  resultat=(((2*pointure)+5)*50)-annee_naissance+1766;
  alert('le résultat est '+'resultat');
}
