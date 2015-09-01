// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

// Store the angular.module in app
var app = angular.module('starter', ['ionic']);

// Controller for listing notes
app.controller('ListCtrl', function($scope) {
  // list of notes
  $scope.notes = [
    {
      title: 'Note Title 1',
      description: 'This is the description for Note 1'
    },
    {
      title: 'Note Title 2',
      description: 'This is the description for Note 2'
    },
    {
      title: 'Note Title 3',
      description: 'This is the description for Note 3'
    },
    {
      title: 'Note Title 4',
      description: 'This is the description for Note 4'
    },
    {
      title: 'Note Title 5',
      description: 'This is the description for Note 5'
    },
    {
      title: 'Note Title 6',
      description: 'This is the description for Note 6'
    }
  ];
});

// Setting up the view states and services
app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('list', {
    url: '/list',
    templateUrl: 'templates/list.html'
  });

  // If no other route is given then you will be redirected to /list 
  $urlRouterProvider.otherwise('/list');
});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
