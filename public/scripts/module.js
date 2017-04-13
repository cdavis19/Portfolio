var app = angular.module('myMod', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/home', {
      controller: 'homeController',
      templateUrl: 'public/views/home.html'
    })
    .when('/about', {
      controller: 'aboutController',
      templateUrl: 'public/views/about.html'
    })
    .when('/portfolio', {
      controller: 'portfolioController',
      templateUrl: 'public/views/portfolio.html'
    })
    .otherwise({redirectTo:'/home'});
    $locationProvider.hashPrefix('');
  });
