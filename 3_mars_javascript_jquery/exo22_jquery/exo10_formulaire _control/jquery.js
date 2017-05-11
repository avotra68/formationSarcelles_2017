
  $(document).ready(function () {

    // Déclarer les 3 fonctions de contrôles par champ à con
    function verifPseudo() {
      var $champ=$('#pseudo');
      if($champ.val().length<4 || $champ.val().length)>25){
        $('#verifPseudo').html("<img src='cross.png'>");
        return false;
      }
      else {
        return true;
          $('#verifPseudo').html("<img src='cheked.png'>");
      }
    }

    function verifEmail() {
      var $champ=$('#email');
      /*On encadre une expression régulière par de /   /
      ^ ==> Définit le début de l'expression
      $==> Définit la fin de l'expression. Par conséquent, l'emploi combiné de ^ et $ signifie que l'expression régulièrere définit l'intégralité de ce qui est autorisé
      l'intervalle de lettre de a à z (en miniscule), des chiffres de 0 à 9, et on autorise aussi le ",", le "_", le "-"
      -le "+"est un quantificateur:on signifie que les caractères peuvent êtres présents plusieurs fois
      -on trouve un "@"
      -on retrouve la même intervalle de lettres/chiffres qu'au dessus suivi du quantificateur "+" pour plusieurs fois
      -on trouve le "." de l'email qui doit être échappé avec \
      -intervalle de lettre de a à z
      -quantificateur {2,6} pour présenter de 2 à 6
      */
      if(/^[a-z0-9._-]+@[a-z0-9._-]+[a-z]{2,6}$/.test($champ.val())){
        // si l'email correspond à l'expression régulière
        $('#verifEmail').html("<img src='cross.png'>");
        return false;
      }

//  On appelle les fonctions
//  L'évènement input se déclanche au changement _ PAS METTRE () sinon elle s'exécute immédiatement sans attendre l'ordre de la fonctions input qui est un argument
// c'est le principe de calls back
$('#verifPseudo').on('input', verifPseudo);
$('#verifAge').on('input', verifAge);
$('#verifEmail').on('input', verifEmail);
//  on vérifie tout les champs quand on clique sur valider
$("form").submit(function () {
  var verifFinalPseudo=verifPseudo();
  var verifFinalAge=verifPseudo();
  var verifFinalEmail=verifPseudo();
  if(verifFinalPseudo && verifFinalAge && verifFinalEmail){
    return true; // pour ne pas bloquer l'envoi du formulaire
  }
  else {
    return false; // bloquer l'envoi du formulaire
  }

});


// fin ready function
    });
//https://jqueryvalidation.org/
