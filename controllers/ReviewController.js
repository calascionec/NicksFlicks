movies.controller("ReviewCtrl", function ReviewCtrl($scope, ReviewFactory) {
    $scope.reviews = ReviewFactory.reviews;
    $scope.ReviewFactory = ReviewFactory;
})
