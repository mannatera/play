'use strict';

/**
 * @ngdoc function
 * @name playApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the playApp
 */
angular.module('playApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
