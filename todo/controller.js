angular
  .module("ToDoList", ["LocalStorageModule"])
  .controller("ToDoController", function ($scope, localStorageService) {
    if (localStorageService.get("angular-todolist")) {
      $scope.todo = localStorageService.get("angular-todolist");
    } else {
      $scope.todo = [];
    }

    $scope.$watchCollection("todo", function () {
      localStorageService.set("angular-todolist", $scope.todo);
    });
    $scope.addActv = function () {
      $scope.todo.push($scope.newActv);
      $scope.newActv = {};
    };
    $scope.clean = function () {
      $scope.todo = [];
    };
  });
