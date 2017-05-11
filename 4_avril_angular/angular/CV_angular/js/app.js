var cvApp = angular.module('app',[]);
cvApp.controller('appCtrl', function($scope){
  $scope.ongletCompetences = true;
  $scope.competences = function() {
       $scope.ongletCompetences = true;
       $scope.ongletExperiences = false;
       $scope.ongletFormations = false;
       $scope.ongletCentresInterets = false;
     };
     $scope.experiences = function() {
       $scope.ongletCompetences = false;
       $scope.ongletExperiences = true;
       $scope.ongletFormations = false;
       $scope.ongletCentresInterets = false;
     };
     $scope.formations = function() {
       $scope.ongletCompetences = false;
       $scope.ongletExperiences = false;
       $scope.ongletFormations = true;
       $scope.ongletCentresInterets = false;
     };
     $scope.centresInterets = function() {
       $scope.ongletCompetences = false;
       $scope.ongletExperiences = false;
       $scope.ongletFormations = false;
       $scope.ongletCentresInterets = true;
     };
  });
