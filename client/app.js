
var app = angular.module("gitHubApp", []);
app.controller("mainController", function ($http, $scope) {
  $http.get("https://api.github.com/orgs/mean-april-2017/members").then(function (response) {
    $scope.members = response.data;
  })
});
