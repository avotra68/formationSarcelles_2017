var testApp = angular.module('app',[]);
// REQUETE FICHIER JSON
testApp.controller('testCtrl', function($scope, $http){
$http.get('voiture.json').then (function(response){
  $scope.voitures= response.data;
});

  });

  // $scope.voitures=[
  //   // définition du tableau voiture
  //   {"marque":"Renault", "couleur":"verte"},
	// 	{"marque":"Citroen", "couleur":"grise"},
	// 	{"marque":"Opel", "couleur":"or"},
	// 	{"marque":"Ferrari", "couleur":"rouge"},
	// 	{"marque":"Peugeot", "couleur":"bleu"},
	// 	{"marque":"Nissan", "couleur":"verte"}
  // ]
  // });
// $scope c'est un service
/*
testApp.controller('testCtrl', function($scope, $http){
$http.get(voiture.json)
  $scope.voitures= response.data;
  });

*/
