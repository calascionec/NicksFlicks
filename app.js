var movies = angular.module("movies", ["ui.router"]);

movies.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state("home", {
        url: "",
        templateUrl: "partials/home.html"
    });

    $stateProvider.state("movies-list", {
        url:"/movies-list",
        templateUrl: "partials/movies-list.html"
    });
});
