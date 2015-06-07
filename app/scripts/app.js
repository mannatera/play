'use strict';

/**
 * @ngdoc overview
 * @name playApp
 * @description
 * # playApp
 *
 * Main module of the application.
 */
angular
  .module('playApp', [
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
      .when('/format/:id', {
        templateUrl: 'views/format.html',
        controller: 'FormatCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .directive('mediaelement', function() {
      return {
          link: function($scope, element) {
              $scope.$watch(function() {}, function() {
                  // Wait for templates to render
                  $scope.$evalAsync(function() {
                      element.mediaelementplayer();
                  });
              });
          },
      };
  });