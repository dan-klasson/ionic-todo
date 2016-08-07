angular.module('starter.controllers', ['ngStorage'])

.controller('DashCtrl', function($scope) {})

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
      StorageService.add(todo);
      $state.go('tab.todos');
    }
  };
})


.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  console.log(Chats.all())
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})



.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
