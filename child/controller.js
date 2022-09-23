angular
  .module("primeraApp", [])
  .run(function ($rootScope) {
    $rootScope.nombre = "david";
  })
  .controller("primerContr", function ($scope) {
    $scope.nombre = "pepe";
    setTimeout(function () {
      $scope.$apply(function () {
        $scope.nombre = ":3";
      });
    }, 1000);
  })
  .controller("childCont", function ($scope) {
    // $scope.nombre = "julia";
  });
