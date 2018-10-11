// SERVICE
weatherApp.service("cityService", function () {
    this.city = 'Tel Aviv, IL';
});

weatherApp.service("weatherService", ['$http', function ($http) {

    this.getWeather = function (city, apiKey, entries) {
       return $http.get("http://api.openweathermap.org/data/2.5/forecast", {
                params: {
                    appid: apiKey,
                    q: city.replace(', ', ','),
                    cnt: entries
                }
            });
    }

}]);
