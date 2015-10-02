movies.controller("ReviewCtrl", function ReviewCtrl($scope, UtilitiesFactory, ReviewFactory, $stateParams){
    $scope.review = UtilitiesFactory.findById(ReviewFactory.reviews, $stateParams.reviewId);
    console.log(ReviewFactory.reviews);
    console.log($stateParams.reviewId);
    console.log($scope.review);
})
