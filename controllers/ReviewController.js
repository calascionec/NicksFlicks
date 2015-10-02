movies.controller("ReviewCtrl", function ReviewCtrl($scope, UtilitiesFactory, ReviewFactory, $stateParams){
    $scope.review = UtilitiesFactory.findById(ReviewFactory.reviews, $stateParams.reviewId);
})
