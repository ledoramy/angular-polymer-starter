'use strict';

/**
 * @ngdoc overview
 * @name angularPolymerStarterApp
 * @description
 * # angularPolymerStarterApp
 *
 * Main module of the application.
 */
angular
  .module('angularProjApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('srmAppCtrl', function($scope) {
    $scope.clickNavIcon = function() {
      console.log('nav icon tapped');
      var drawerPanel = document.querySelector('#drawer-panel');
      console.log('toggle left panel');
      drawerPanel.togglePanel();
    }
  });
