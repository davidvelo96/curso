angular
  .module("ToDoList", ["LocalStorageModule"])

  .factory("ToDoService", function (localStorageService) {
    var toDoService = {};

    toDoService.key = "angular-todolist";

    if (localStorageService.get(toDoService.key)) {
      toDoService.act = localStorageService.get(toDoService.key);
    } else {
      toDoService.act = [];
    }

    toDoService.add = function (newActv) {
      toDoService.act.push(newActv);
      toDoService.updaLocalStorage();
    };
    toDoService.updaLocalStorage = function () {
      localStorageService.set(toDoService.key, toDoService.act);
    };
    toDoService.clean = function () {
      toDoService.act = [];
      toDoService.updaLocalStorage();
    };
    toDoService.getAll = function () {
      return toDoService.act;
    };
    toDoService.removeItem = function (item) {
      toDoService.act = toDoService.act.filter(function (ac) {
        return ac !== item;
      });
      toDoService.updaLocalStorage();
      return toDoService.getAll();
    };

    return toDoService;
  })
  .controller("ToDoController", function ($scope, ToDoService) {
    
    $scope.todo = ToDoService.getAll();
    $scope.newActv = {};
    $scope.addActv = function () {
      ToDoService.add($scope.newActv);
      $scope.newActv = {};
    };
    $scope.removeAct = function (item) {
      $scope.todo = ToDoService.removeItem(item);
    }
    $scope.clean = function () {
      $scope.todo = ToDoService.clean();
    }
  });
