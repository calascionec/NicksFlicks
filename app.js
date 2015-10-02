var movies = angular.module("movies", ["ui.router"]);

movies.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state("home", {
        url: "",
        views: {
            "header": {
                templateUrl: "partials/header.html"
            },
            "body": {
                templateUrl: "partials/home.html"
            }
        }
    });

    $stateProvider.state("movies-list", {
        url:"/movies-list",
        views: {
            "header": {
                templateUrl: "partials/header.html"
            },
            "body": {
                templateUrl: "partials/movies-list.html"
            }
        }
    });
});
