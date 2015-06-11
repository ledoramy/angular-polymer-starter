'use strict';

/**
 * @ngdoc function
 * @name angularPolymerStarterApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularPolymerStarterApp
 */
angular.module('angularProjApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
