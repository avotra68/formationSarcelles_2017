var schoolApp = angular.module('schoolApp',[]);

schoolApp.controller('studentsCtrl',function($scope){
// on fournit au scope les variables
  $scope.firstName = 'Émilie';
  $scope.lastName = 'Gérard';
  $scope.age = '17';
  $scope.grade = 'Terminale';
});
