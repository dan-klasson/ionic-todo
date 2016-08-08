angular.module('starter.services', ['ngStorage'])

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

.factory('Todos', function(StorageService) {
  // Might use a resource here that returns a JSON array
  var todos = StorageService.getAll();

  return {
    all: function() {
      return todos;
    },
    remove: function(todo) {
      StorageService.remove(todo);
    },
    add: function(todo) {
      StorageService.add(todo);
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


