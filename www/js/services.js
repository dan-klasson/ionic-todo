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

