//DIRECTIVES
weatherApp.directive("weatherReport", function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/weather-report.html',
        replace: true,
        scope: {
            day: '&',
            temp: '&',
            dateFormat: '@'
        }

    }
})