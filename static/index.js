var app = angular.module("Body", ["ngRoute"]);

app.config(($routeProvider) => {
  $routeProvider
    .when("/", {
      templateUrl: "main.html",
    })
    .when("/about", {
      templateUrl: "about.html",
    })
    .when("/login", {
      templateUrl: "login.html",
    })
    .when("/contacts", {
      templateUrl: "contacts.html",
    });
});
