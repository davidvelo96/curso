angular
  .module("CustomDirective")

.controller("ReposController", function ($scope, $http) {
    $scope.repos = [];

    $http.get("https://api.github.com/users/twitter/repos").then(
      function success(data) {
        var long = data.data;
        $scope.posts = long;
        for (let i = 0; i < long.length; i++) {
            var repo = long[i];
            $scope.repos.push(repo.name);
        }
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
})
.controller("RepoController",function ($scope,$http,$routeParams) {
  $scope.repo={};
  $http.get("https://api.github.com/repos/twitter/"+$routeParams.name).then(
      function success(data) {
        var long = data.data;
        $scope.repo = long;
     
      },
      function error(err) {
        console.log(err);
      }
    );
});