/*$(function(){
  $('anim1').click(function(){


$("#anim1").css("height", "200px");
},function(){
$("#anim1").css("height", "400px");


});
}); */


/*$( "#anim1" ).click(function() {
  $( "#un" ).animate({
    width: "400px",
    height: "400px"
  }, 1500 );
});*/


//1ere animation//
$( "#anim1" ).click(function() {
  $( "#un" ).animate({ "bottom": "+=200px" }, "slow" );
});

//2eme animation//
$( "#anim2" ).click(function() {
  $( "#deux" ).animate({ "margin-top":"-=400px" ,"left": "+=400px" }, "slow" );
  });

  //correction animation 2
  //$("#anim2").click(function(){
  //  $("#deux").animate({ left: "200px", bottom : "200px"});
  //});

//3eme animation//
  $( "#anim3" ).click(function() {
    $( "#trois" ).animate({ "margin-top":"+=100px" , "left": "+=100px" }, "slow" );
    $( "#trois" ).animate({ "margin-top":"-=100px" , "left": "+=100px" }, "slow" );
    });

  //correction animation 3
  //$( "#anim3" ).click(function() {
  //  $("#trois").animate({bottom : "+=200px", left : "+=200px"}).animate({bottom : "-=200px", left : "+=200px"});
  //    });


/*4eme animation
$( "#anim4" ).click(function() {

  $( "#quatre" ).animate({ "left": "+=400px" }, "slow" );
  $( "#quatre" ).animate({ "left": "-=400px" }, "slow" );
});*/


//correction animation 4

function anim4(){
  $("#quatre").animate({left : "400px"}, 500).
     animate({left : "0px"}, 500, anim4);
    }

    /*
    Ci-dessus, la fonction ainm4 s'appelle elle-même quand les animations sont terminées.
    cela permet de les faire tourner en boucle à l'infini.
    Notez l'absence de () à anim4 car il s'agit d'une callback.
    */
  $("#anim4").click(function(){
    anim4(); /*on appelle la fonction anim4 pour la première fois lors du clic sur le bouton pour qu'elle démarre.*/
  });
