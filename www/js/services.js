angular.module('starter.services', ['ngStorage'])

.factory('Todos', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var todos = [{
    id: 0,
    name: 'Finish test',
  }, {
    id: 1,
    name: 'Watch movies',
  }];

  return {
    all: function() {
      return todos;
    },
    remove: function(todo) {
      todos.splice(todos.indexOf(todo), 1);
    },
    get: function(todoId) {
      for (var i = 0; i < todos.length; i++) {
        if (todos[i].id === parseInt(todoId)) {
          return todos[i];
        }
      }
      return null;
    }
  };
})

.factory ('StorageService', function ($localStorage) {

  $localStorage = $localStorage.$default({
    todos: []
  });

  var _getAll = function () {
    return $localStorage.todos;
  };
  var _add = function (todo) {
    $localStorage.todos.push(todo);
  }
  var _remove = function (todo) {
    $localStorage.todos.splice($localStorage.todos.indexOf(todo), 1);
  }
  return {
    getAll: _getAll,
    add: _add,
    remove: _remove
  };
})


.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
