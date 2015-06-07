'use strict';

/**
 * @ngdoc function
 * @name playApp.controller:FormatCtrl
 * @description
 * # FormatCtrl
 * Controller of the playApp
 */
angular.module('playApp')
  .controller('FormatCtrl', ['$scope', '$http', '$sce', '$routeParams', 'Playapi', function ($scope, $http, $sce, $routeParams, Playapi) {
    
    $scope.loadMediaElement = function(src) {
      //$('video,audio').mediaelementplayer();
    };
    
    $scope.src = function(src) {
      return $sce.trustAsResourceUrl(src);
    };
    Playapi.getFormat($routeParams.id).then(function(format) {
      $scope.format = format;
      $scope.title = format.title;      
    });
    Playapi.getLatestStream($routeParams.id).then(function(stream) {
      $scope.stream = stream;
    });
    
  }]);
