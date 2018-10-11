
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

        $scope.getDay = function(day) {
            return day * 1000;
        }

        $scope.getTemp = function(temp) {
            return (temp - 273.15).toFixed()
        }

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
