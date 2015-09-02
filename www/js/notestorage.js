angular.module('notesapp.notestorage', [])
  // Custom service factory
  .factory('NoteStorage', function() {

    // Notes var accessible to both controllers
    // Converts notes form json to an [] of {}'s
    // If notes is empty the an empty [] will be returned
    var notes = angular.fromJson(window.localStorage.notes || '[]');
    //
    // Setting up HTML5 local storage for notes
    function localStore() {
      // Converts notes[] to json for local stoarage
      window.localStorage.notes = angular.toJson(notes);
    }
     /*{
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
    ];*/

    // Returns properties
    return {
      // list() returns notes
      list: function() {
        return notes;
      },

      // get($state.params.noteId) returns the matched notes[i] unless it does not exist yet
      get: function(noteId) {
        for (var i = 0; i < notes.length; i++) {
          if (notes[i].id === noteId) {
            return notes[i];
          }
        }
        return undefined;
      },

      // create($scope.note) will unsift($scope.note) to the top of the notes[]
      create: function(note) {
        notes.unshift(note);
        localStore();
      },

      // update($scope.note) will match notes and set update the current notes data with new data
      update: function(note) {
        for (var i = 0; i < notes.length; i++) {
          if (notes[i].id === note.id) {
            notes[i] = note;
            localStore();
            return;
          }
        }
        return undefined;
      },

      // Move will splice the note from it's current position in the [] a splice it back into the []
      move: function(note, fromIndex, toIndex) {
        notes.splice(fromIndex, 1);
        notes.splice(toIndex, 0, note);
        localStore();
      },

      // Removes the matched note by splicing it from the array
      remove: function(noteId) {
        for (var i = 0; i < notes.length; i++) {
          if (notes[i].id === noteId) {
            notes.splice(i, 1);
            localStore();
            return;
          }
        }
      }
    };
});
