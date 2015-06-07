'use strict';

/**
 * @ngdoc function
 * @name playApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the playApp
 */
angular.module('playApp')
  .controller('MainCtrl', ['$scope', '$http', 'Playapi', function ($scope, $http, Playapi) {
    Playapi.getChannelFormats(1375).then(function(formats) {
      $scope.formats = formats;
    });
  }]);
