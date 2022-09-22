angular
  .module("MiPrimeraAPP", [])
  .controller("PrimerController", function ($scope, $http) {
    $scope.pos = [];
    $scope.newPost = {};

    $http.get("http://jsonplaceholder.typicode.com/posts").then(
      function success(data) {
        console.log(data);
        $scope.pos = data.data;
      },
      function error(err) {}
    );

    $scope.addPost = function () {
      $http
        .post("http://jsonplaceholder.typicode.com/posts", {
          title: $scope.newPost.title,
          body: $scope.newPost.body,
          userId: 1
        })
        .then(
          function success(data, status, headers, config) {
            $scope.pos.push($scope.newPost);
            $scope.newPost={};
            console.log(data);

        },
          function error(error, status, headers, config) {
            console.log(error);
          }
        );
    };
  });
