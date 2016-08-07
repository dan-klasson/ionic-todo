angular.module('starter.controllers', ['ngStorage'])

.controller('TodosCtrl', function($scope, Todos) {
  $scope.todos = Todos.all();
  $scope.remove = function(todo) {
    Todos.remove(todo);
  };
})

.controller('TodoDetailCtrl', function($scope, $stateParams, Todos) {
  $scope.todo = Todos.get($stateParams.todoId);
})

.controller('TodoAddCtrl', function ($scope, StorageService, $state) {
  $scope.content = {};

  $scope.todos = StorageService.getAll();

  $scope.add = function() {

    var todo = $scope.content.name;

    if(todo) {
      data = {
        id: todo.length,
        name: todo
      }
      StorageService.add(data);
      $state.go('tab.todos');
    }
  };
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
