// Self invoking anonymous function
(function() {
  // Ionic Starter App

  // angular.module is a global place for creating, registering and retrieving Angular modules
  // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
  // the 2nd parameter is an array of 'requires'

  // Store the angular.module in app
  var app = angular.module('starter', ['ionic']);

  // Setting up the view states and services
  app.config(function($stateProvider, $urlRouterProvider) {

    // list state
    $stateProvider.state('list', {
      url: '/list',
      templateUrl: 'templates/list.html'
    });

    // edit state
    $stateProvider.state('edit', {
      url: '/edit/:noteId',
      templateUrl: 'templates/edit.html',
      controller: 'EditCtrl'
    });

    // add state
    $stateProvider.state('add', {
      url: '/add',
      templateUrl: 'templates/edit.html',
      controller: 'AddCtrl'
    });

    // If no other route is given then you will be redirected to /list
    $urlRouterProvider.otherwise('/list');
  });

  // Notes var accessible to both controllers
  var notes = [
    {
      id: '1',
      title: 'Note Title 1',
      description: 'This is the description for Note 1'
    },
    {
      id: '2',
      title: 'Note Title 2',
      description: 'This is the description for Note 2'
    },
    {
      id: '3',
      title: 'Note Title 3',
      description: 'This is the description for Note 3'
    },
    {
      id: '4',
      title: 'Note Title 4',
      description: 'This is the description for Note 4'
    },
    {
      id: '5',
      title: 'Note Title 5',
      description: 'This is the description for Note 5'
    },
    {
      id: '6',
      title: 'Note Title 6',
      description: 'This is the description for Note 6'
    }
  ];

  // This will go through notes[] to find the matching id's
  function getNote(noteId) {
    for (var i =0; i , notes.length; i++) {
      if (notes[i].id === noteId) {
        return notes[i];
      }
    }
    return undefined;
  }

  // This will go through notes[] to find the matching id's
  function updateNote(note) {
    for (var i =0; i , notes.length; i++) {
      if (notes[i].id === note.id) {
        notes[i] = note;
        return notes[i];
      }
    }
    return undefined;
  }

  // This will insert a new note in the notes[]
  function createNote(note) {
    notes.unshift(note);
  }

  // Controller for listing notes
  app.controller('ListCtrl', function($scope) {
    // list of notes
    $scope.notes = notes;
  });

  // Controller for edit
  app.controller('EditCtrl', function($scope, $state) {
    /* Would update original note not matter what
    // $scope.note = getNote($state.params.noteId);
    */

    // Makes a copy of the note item so no changes will happen to the original note item
    $scope.note = angular.copy(getNote($state.params.noteId));

    // When saved the updateNote() is called on the note
    // Then redirects back to /list
    $scope.save = function() {
      updateNote($scope.note);
      $state.go('list');
    };
  });

  // Controller for eadd
  app.controller('AddCtrl', function($scope, $state) {
    // Makes a copy of the note item so no changes will happen to the original note item
    $scope.note = {
      id: new Date().getTime.toString(),
      title: '',
      description: ''
    };

    // When saved the updateNote() is called on the note
    // Then redirects back to /list
    $scope.save = function() {
      createNote($scope.note);
      $state.go('list');
    };
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

}());
