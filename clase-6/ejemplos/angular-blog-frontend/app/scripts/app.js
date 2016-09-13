'use strict';

/**
 * @ngdoc overview
 * @name angularBlogApp
 * @description
 * # angularBlogApp
 *
 * Main module of the application.
 */
angular
  .module('angularBlogApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngHolder',
    'angularMoment'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/posts/:post_id', {
        templateUrl: 'views/showpost.html',
        controller: 'ShowPostCtrl',
        controllerAs: 'showPost'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['$httpProvider', function($httpProvider) {
      $httpProvider.defaults.useXDomain = true;
      $httpProvider.defaults.withCredentials = true;
      delete $httpProvider.defaults.headers.common["X-Requested-With"];
      $httpProvider.defaults.headers.common["Accept"] = "application/json";
      $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    }
  ])
  .run(function(amMoment) {
    amMoment.changeLocale('es');
  });
