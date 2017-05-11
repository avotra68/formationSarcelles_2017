var testApp = angular.module('app',[]);
testApp.controller('testCtrl', function($scope){
  $scope.cacherParagraphe = function() {
       $scope.message = false;
     };
     $scope.afficherParagraphe = function() {
        $scope.message = true;

     };

  });
