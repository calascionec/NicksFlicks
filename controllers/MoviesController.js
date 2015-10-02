movies.controller("MoviesCtrl", function MoviesCtrl($scope, ReviewFactory, UtilitiesFactory, $stateParams) {
    $scope.reviews = ReviewFactory.reviews;
    $scope.ReviewFactory = ReviewFactory;
    

})
