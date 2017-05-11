var testApp = angular.module('app',[]);
testApp.controller('testCtrl', function($scope){
  $scope.afficherParagraphe1 = function() {
       $scope.message1 = true;
       $scope.message2 = false;
     };
     $scope.afficherParagraphe2 = function() {
        $scope.message2 = true;
        $scope.message1 = false;
     };

  });
