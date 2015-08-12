var app = angular.module('ecommerce', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'template/home.html',
      controller: 'mainCtrl'
    })
    .when('/backend', {
      templateUrl: 'template/backend.html',
      controller: 'backendCtrl'
    })
})
