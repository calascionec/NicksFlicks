movies.controller("MoviesCtrl", function MoviesCtrl($scope, ReviewFactory) {
    $scope.reviews = ReviewFactory.reviews;
    $scope.ReviewFactory = ReviewFactory;


})
