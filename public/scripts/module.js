var app = angular.module('myMod', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/home', {
      controller: 'homeController',
      templateUrl: 'views/home.html'
    })
    .when('/about', {
      controller: 'aboutController',
      templateUrl: 'views/about.html'
    })
    .when('/portfolio', {
      controller: 'portfolioController',
      templateUrl: 'views/portfolio.html'

    })
    .otherwise({redirectTo:'/'});
    $locationProvider.hashPrefix('');
  });
