
var app = angular.module("userLoginApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
  .when("/login", {
    templateUrl: "/partials/login.html",
    controller: "loginController"
  })
  .when("/", {
    templateUrl: "/partials/home.html",
    controller: "homeController"
  })
  .otherwise("/");
});
app.factory("userFactory", function ($timeout) {
  var factory = {};
  factory.user = null;

  factory.userLogin = function (user, finishedLogginIn) {
    $timeout(function () {
      factory.user = { username: user.username, createdAt: Date() };
      finishedLogginIn();
    }, 1000);
  }

  return factory;
});
app.controller("loginController", function ($scope, $location, userFactory) {
  $scope.login = function () {

    userFactory.userLogin($scope.user, function () {
      $location.url("/");
    });

  }
});
app.controller("homeController", function ($scope, $location, userFactory) {
  if (userFactory.user === null) {
    $location.url("/login");
    return;
  }

  $scope.loggedInUser = userFactory.user;

});
