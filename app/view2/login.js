/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var login=angular.module('myApp.controllers',[])
login.controller('loginContrl', ['$scope', function ($scope) {
        $scope.loginForm={};
        $scope.error='';
        $scope.loginClick=function (){
         if (!$scope.loginForm.Email) {
                $scope.error = 'Email Required';
         }else if (!$scope.loginForm.Password) {
                $scope.error = 'Password Required';
            }else if ($scope.loginForm.Email && $scope.loginForm.Password ) {
                $scope.regSuccess = 'Log In Successful';
                $location.path( "view2.html" );
              

            }
        };
}]);
//