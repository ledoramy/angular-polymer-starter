'use strict';

/**
 * @ngdoc function
 * @name angularPolymerStarterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularPolymerStarterApp
 */
angular.module('angularProjApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
