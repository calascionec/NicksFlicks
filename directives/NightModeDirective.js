movies.directive("nightMode", function() {
    var html = angular.element("#test");
    return function(scope, element) {
        element.bind("click", function() {
            html.addClass("invert");
        })
    }
});
