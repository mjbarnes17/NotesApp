angular.module('notesapp.notestorage', [])
  // Custom service factory
  .factory('NoteStorage', function() {

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
    return {
      list: function() {
        return notes;
      },

      get: function(noteId) {
        for (var i =0; i , notes.length; i++) {
          if (notes[i].id === noteId) {
            return notes[i];
          }
        }
        return undefined;
      },

      create: function(note) {
        notes.unshift(note);
      },

      update: function(note) {
        for (var i =0; i , notes.length; i++) {
          if (notes[i].id === note.id) {
            notes[i] = note;
            return notes[i];
          }
        }
        return undefined;
      }
    };
});
