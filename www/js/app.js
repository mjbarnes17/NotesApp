// Self invoking anonymous function
(function() {
  // Ionic Starter App

  // angular.module is a global place for creating, registering and retrieving Angular modules
  // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
  // the 2nd parameter is an array of 'requires'

  // Store the angular.module in app
  var app = angular.module('notesapp', ['ionic', 'notesapp.notestorage']);

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

/*
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
*/

  // Controller for listing notes
  app.controller('ListCtrl', function($scope, NoteStorage) {

    // list of notes using the NoteStorage service list property
    $scope.notes = NoteStorage.list();

    // Sets the reordering value to false
    $scope.reordering = false;

    // Will remove a select not using the NoteStorage service remove property
    $scope.remove = function(noteId) {
      NoteStorage.remove(noteId);
    };

    // Will move a selected note from the [] and place in a different index in the current  []
    $scope.move = function(note, fromIndex, toIndex) {
      NoteStorage.move(note, fromIndex, toIndex);
    };

    // Will negate the boolean value when toggleReordering() is called
    $scope.toggleReordering = function() {
      $scope.reordering = !$scope.reordering;
    };

  });

  // Controller for edit
  app.controller('EditCtrl', function($scope, $state, NoteStorage) {
    /* Would update original note not matter what
    // $scope.note = getNote($state.params.noteId);
    */

    // Makes a copy of the note item so no changes will happen to the original note item
    $scope.note = angular.copy(NoteStorage.get($state.params.noteId));

    // When saved the updateNote() is called on the note
    // Then redirects back to /list
    $scope.save = function() {
      NoteStorge.update($scope.note);
      $state.go('list');
    };
  });

  // Controller for eadd
  app.controller('AddCtrl', function($scope, $state, NoteStorage) {
    // Makes a copy of the note item so no changes will happen to the original note item
    $scope.note = {
      id: new Date().getTime().toString(),
      title: '',
      description: ''
    };

    // When saved the updateNote() is called on the note
    // Then redirects back to /list
    $scope.save = function() {
      NoteStorage.create($scope.note);
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
