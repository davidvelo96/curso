angular
  .module("CustomDirective")

.controller("AppCtrl", function ($scope, $http) {
    $scope.repos = [];

    $http.get("https://api.github.com/users/twitter/repos").then(
      function success(data) {
        // console.log(data);
        var long = data.data;
        $scope.posts = long;
        for (let i = 0; i < long.length; i++) {
            var repo = long[i];
            $scope.repos.push(repo.name);
        }
        // for (var i = long.length - 1; i >= 0; i--) {
        //   var repo = long[i];
        //   $scope.repos.push(repo.name);
        //   //   console.log(repo.name);
        // }
      },
      function error(err) {
        console.log(err);
      }
    );

    $scope.optionSelected = function (data) {
      $scope.$apply(function () {
        $scope.main_repo = data;
      });
    };
});