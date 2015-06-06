'use strict';

/**
 * @ngdoc function
 * @name playApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the playApp
 */
angular.module('playApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
