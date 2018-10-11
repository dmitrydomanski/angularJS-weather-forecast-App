weatherApp.controller('homeController', ['$scope', '$location', 'cityService',
    function ($scope, $location, cityService) {
        $scope.city = cityService.city;

        $scope.$watch('city', function () {
            cityService.city = $scope.city;
        });

        $scope.submit = function () {

            $location.path("/forecast");

        };
    }
]);

weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService',
    function ($scope, $routeParams, cityService, weatherService) {

        $scope.city = cityService.city;
        $scope.apiKey = "b5d2be91d9878b08d0193bd934b0740d";
        $scope.entries = $routeParams.entries || 5;
        
        weatherService.getWeather($scope.city, $scope.apiKey, $scope.entries).then(function (response) {
            $scope.weatherResult = response.data;
        });;

        $scope.getDay = function (day) {
            return day * 1000;
        }

        $scope.getTemp = function (temp) {
            return (temp - 273.15).toFixed()
        }
    }
]);