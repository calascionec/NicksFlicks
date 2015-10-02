movies.directive("nightMode", function() {
    var body = angular.element("#body");
    return function(scope, element) {
        element.bind("click", function() {
            body.toggleClass("invert");
        })
    }
});
