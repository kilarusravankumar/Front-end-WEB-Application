/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var reg = angular.module('myApp.controllers', [])
reg.controller('MyCtrl1', ['$scope', function ($scope) {
        $scope.formInfo = {};
        $scope.reg_users=[];

        $scope.saveData = function () {
           
            $scope.error='';

            if (!$scope.formInfo.Name) {
                $scope.error = 'Name Required';
            }

           else if (!$scope.formInfo.Email) {
                $scope.error = 'Email Required';
            }

           else if (!$scope.formInfo.Password) {
                $scope.error = 'Password Required';
            }
            else if($scope.formInfo.Password!==$scope.formInfo.Password1){
                $scope.error='Passwords do not match';
            }
             else if (!$scope.formInfo.hnum) {
                $scope.error='PhoneNumber required';
            }
           else if ($scope.formInfo.Name && $scope.formInfo.Email && $scope.formInfo.Password && $scope.formInfo.Phnum && ($scope.formInfo.Password===$scope.formInfo.Password1)) {
                $scope.regSuccess = 'Registration Successful';
                $scope.reg_users.push($scope.formInfo);

            }
           
        };
    }]);
  