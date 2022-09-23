angular
  .module("MiPrimeraAPP", [])
  .controller("PrimerController", function ($scope, $http) {
    $scope.pos = [];
    $scope.loading = true;
    $http.get("http://jsonplaceholder.typicode.com/posts").then(
      function success(data) {
        console.log(data);
        $scope.pos = data.data;
        $scope.loading = false;
      },
      function error(err) {
        $scope.loading = false;
      }
    );
  });
