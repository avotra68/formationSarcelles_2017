$(function(){
  $('.thumbnail').click(function(){

    //On change les attributs de #portrait, on les remplace par les attributs de this
    //(sous la forme .attr({indice1: élément1, indice2: élément2}))
    $('#portrait').attr({'src': $(this).attr('src'), 'alt': $(this).attr('alt')});
    // {indice: variable, indice:variable} objet
    //Dans .titre, on écrit la valeur de #portrait (attribut 'alt').
    $('.titre').text($('#portrait').attr('alt'));

    //On supprime toutes les class 'selected'
    $('.thumbnail').removeClass('selected');
    //Quand c'est fait, on ajoute 'selected' sur l'élément cliqué
    $(this).addClass('selected');


  })
});
