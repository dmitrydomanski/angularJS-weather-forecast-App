// CONFIG
weatherApp.config(function ($routeProvider, $sceDelegateProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'templates/pages/home.html',
            controller: 'homeController'
        })

        .when('/forecast', {
            templateUrl: 'templates/pages/forecast.html',
            controller: 'forecastController'
        })

        .when('/forecast/:entries', {
            templateUrl: 'templates/pages/forecast.html',
            controller: 'forecastController'
        });

    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain. **.
        'http://api.openweathermap.org/**'
    ]);
});