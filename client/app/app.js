// Set up our Front-End Framework using AngularJS

// Instantiate the app
angular.module('MeetlyApp', [
  'MeetlyApp.form',
  'MeetlyApp.map',
  'MeetlyApp.services',
  'ui.router',
  'MeetlyApp.citibikeService',
  'MeetlyApp.citibikeCtrl'])

.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'app/views/form.html'
    })
    .state('map-view', {
      url: '/map-view',
      templateUrl: 'app/views/map-view.html'
    })
    .state('citibike', {
      url: '/citibike',
      templateUrl: 'app/views/citibike.html'

    })





})