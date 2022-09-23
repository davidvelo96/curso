angular
  .module("CustomDirective", [])
  .directive("myAutocomplete", function () {
    function link(scope, element, attrs) {
      $(element).autocomplete({
        source: scope[attrs.myAutocomplete],
        select: function (ev, ui) {
          ev.preventDefault();
          if (ui.item) {
            scope.optionSelected(ui.item.value);
          }
        },
        focus: function (ev, ui) {
          ev.preventDefault();
          $(this).val(ui.item.label);
        },
      });
    }
    return {
      link: link,
    };
  })
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
    $scope.repos = [];

    $http.get("https://api.github.com/users/davidvelo96/repos").then(
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
