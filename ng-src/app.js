angular
  .module("CustomDirective", [])
  .directive("backImg", function () {
    return function (scope, element, attrs) {
      attrs.$observe("backImg", function (value) {
        element.css({
          background: "url(" + value + ")",
          "background-position": "center",
          "background-size": "cover",
        });
      });
    };
  })
  .controller("AppCtrl", function ($scope, $http) {
    $http.get("https://api.github.com/users/davidvelo96/repos").then(
      function success(data) {
        console.log(data);
        $scope.repos = data.data;
      },
      function error(err) {
        console.log(err);
      }
    );
  });
