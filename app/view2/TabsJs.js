/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var TabsApp=angular.module('TabsApp', [ ])
TabsApp.controller('TabsCtrl', ['$scope', function ($scope) {
    $scope.tabs = [{title: 'Home',url: 'GroupsDisplay.html'},{
            title: 'Manage Members',
            url: ''
        }, {
            title: 'Manage Groups',
            url: 'GroupsDisplay.html'
        }, {
            title: 'Map View',
            url: 'mapView.html'
    },{title: 'Meassages',url: 'testMessage.html'}];

    $scope.currentTab = 'GroupsDisplay.html';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;

    }
    
    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }
}]);

