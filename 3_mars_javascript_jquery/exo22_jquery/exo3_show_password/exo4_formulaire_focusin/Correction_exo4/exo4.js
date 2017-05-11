
/*
$(function(){
   $("#input").hover(
     function(){ $("#input").addClass("border");}, //virgule séparant 2ème fonction//
     function(){ $("#input").removeClass("border");});//fin parenthèse hover//;
/*la méthode hover attend 2 fonctions en arguments :
  la première correspond à un mouseenter, la seconde à un mouseleave*/

  /* DERNIER ESSAI
  $(function(){

  $("#mdp, #pseudo").focus(function () {

    $(this).css({'border': 'green solid 2px'});
});
  $("#mdp, #pseudo").focusout(function () {
    $(this).css("border", "black solid 2px");
   });
});
*/

//CORRECTION//
$(function(){
   $(".focus").focusin(function(){
      $(this).css("border", "2px solid green");
   });
/*Autre façon d'écricre la méthode css():
$(".focus").focusin(function(){
   $(this).css({"border": "2px solid green", "border-radius", "5px"});
});
*/
   $(".focus").focusout(function(){
      $(this).css("border", "");
   });
});

/* this: ce mot clé renvoie systématiquement à l'objet (la balise) dans laquelle on se situe (par exemple dans celle où on a cliqué).*/

/* focusin va au focusout : ils s'appliquent aussi aux enfants. Il y existe aussi focus qui va avec blur : ils ne s'appliquent qu'aux inputs de formulaire.*/

/* La méthode css() a 2 syntaxes :
css("propriete", "valeur")
ou
css({"prop1" : "valeur1", "prop2" : "valeur2"}) */
