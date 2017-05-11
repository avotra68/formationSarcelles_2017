var testApp = angular.module('app',[]);

testApp.controller('testCtrl', function($scope){
  $scope.voitures=[
    // définition du tableau voiture
    {"marque":"Renault", "couleur":"verte"},
		{"marque":"Citroen", "couleur":"grise"},
		{"marque":"Opel", "couleur":"or"},
		{"marque":"Ferrari", "couleur":"rouge"},
		{"marque":"Peugeot", "couleur":"bleu"},
		{"marque":"Nissan", "couleur":"verte"}
  ]
  });
