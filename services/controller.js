angular
  .module("ToDoList", ["LocalStorageModule"])

  .service("ToDoService", function (localStorageService) {
  
    this.key = "angular-todolist";

    if (localStorageService.get(this.key)) {
      this.act = localStorageService.get(this.key);
    } else {
      this.act = [];
    }

    this.add = function (newActv) {
      this.act.push(newActv);
      this.updaLocalStorage();
    };
    this.updaLocalStorage = function () {
      localStorageService.set(this.key, this.act);
    };
    this.clean = function () {
      this.act = [];
      this.updaLocalStorage();
    };
    this.getAll = function () {
      return this.act;
    };
    this.removeItem = function (item) {
      this.act = this.act.filter(function (ac) {
        return ac !== item;
      });
      this.updaLocalStorage();
      return this.getAll();
    };

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
