(function () {
'use strict';
angular.module('myFirstAppAssignment', [])
.controller('MyFirstController', function ($scope) {
  $scope.list = "";
  $scope.message = "no message";  
  $scope.msgClass="";
  $scope.CheckStatus = function () {
      debugger;
     if($scope.list==""){
         $scope.message="Please enter data first";  $scope.msgClass="red";
     } else{
     checkstring($scope.list);
     }
  };
    function  checkstring(str){
        var words = str.split(' ');
        if(words.length<=3){
             $scope.message="Enjoy";
             $scope.msgClass="green";
             }
            else{
              $scope.message="Too much!";  
              $scope.msgClass="green";
            }
        }
    
});

})();
