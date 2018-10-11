// MODULE
const weatherApp = angular.module("weatherApp", ["ngRoute"]);

// CONFIG
weatherApp.config(function ($routeProvider, $sceDelegateProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })

        .when('/forecast', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        })

        .when('/forecast/:entries', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        });

    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain. **.
        'http://api.openweathermap.org/**'
    ]);
});

// SERVICE
weatherApp.service("cityService", function () {
    this.city = 'Tel Aviv, IL';
})

// CONTROLLERS

weatherApp.controller('homeController', ['$scope', 'cityService', function ($scope, cityService) {
    $scope.city = cityService.city;

    $scope.$watch('city', function () {
        cityService.city = $scope.city;
    })
}]);

weatherApp.controller('forecastController', ['$scope', '$http', '$routeParams', 'cityService',
    function ($scope, $http, $routeParams, cityService) {

        $scope.weatherResult = ''
        $scope.city = cityService.city;
        $scope.entries = $routeParams.entries || 5;
        $scope.apiKey = "b5d2be91d9878b08d0193bd934b0740d";

        // $scope.$watch('entries', () => console.log($scope.entries));

        $http.get("http://api.openweathermap.org/data/2.5/forecast", {
                params: {
                    appid: $scope.apiKey,
                    q: $scope.city.replace(', ', ','),
                    cnt: $scope.entries
                }
            })
            .then(function (response) {
                $scope.weatherResult = response.data;
            });
    }
]);