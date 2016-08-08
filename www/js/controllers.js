angular.module('starter.controllers', [])

.controller('TodosCtrl', function($scope, Todos, $state) {

  $scope.todos = Todos.all();

  $scope.data = {
    showDelete: false
  };

  $scope.add = function() {
    $state.go('tab.add');
  };

  $scope.remove = function(todo) {
    Todos.remove(todo);
  };
})

.controller('TodoDetailCtrl', function($scope, $stateParams, Todos, $state) {

  $scope.todo = Todos.get($stateParams.todoId);

  $scope.remove = function(todo) {
    Todos.remove(todo);
    $state.go('tab.todos');
  };
})

.controller('TodoAddCtrl', function ($scope, $state, Todos) {
  $scope.content = {};

  $scope.add = function() {

    var todo = $scope.content.name;

    if(todo) {

      $scope.content.name = '';

      Todos.add({
        id: Todos.all().length + 1,
        name: todo
      });

      $state.go('tab.todos');
    }
  };

})

.controller('AccountCtrl', function($scope) {
  // unused for now
  $scope.settings = {
    enableServer: true
  };
});
