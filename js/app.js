'use strict';

// angular.js main app initialization
var app = angular.module('DB',['ngRoute']);

// routes
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    //$locationProvider.hashPrefix('!');
    $routeProvider.
            when('/',{templateUrl: 'templates/home.html', controller: 'mainController' }).
            when('/home',{templateUrl: 'templates/home.html', controller: 'mainController' }).
            otherwise({redirectTo: '/'})
    }]);

// controllers
app.controller('mainController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.currentPath = $location.path();
    $scope.bodyClass = function (){
        if($location.path() === '/' || $location.path() === '/home') {
            return "homepage";
        } else {
            return "no-sidebar";
        }
    };
    $scope.isHome = function(){
        return $location.path() === '/' || $location.path() === '/home';
    }
}]);