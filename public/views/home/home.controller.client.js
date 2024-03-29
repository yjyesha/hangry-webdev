/**
 * Created by yeshajoshi on 7/26/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("homeController", homeController);

    function homeController(foodService) {
        var model = this;
        model.searchFoodSpotByCity = searchFoodSpotByCity;
        model.searchFoodSpotByLocation = searchFoodSpotByLocation;
        model.geoFindMe = geoFindMe;
        function init() {
        }
        init();

        function searchFoodSpotByCity(city) {
            console.log(city);
            foodService
                .searchFoodSpotByCity(city)
                .then(function (response) {
                    model.eatSpots = response.data;
                    console.log(model.eatSpots);
                })
        }

        function searchFoodSpotByLocation(lat,lon) {
            foodService
                .searchFoodSpotByLocation(lat,lon)
                .then(function(response) {
                    model.eatSpot = response.data;
                    console.log(model.eatSpot);
                })
        }


        function geoFindMe() {
            var output = document.getElementById("out");
            if (!navigator.geolocation){
                output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
                return;
            }

            function success(position) {
                var latitude  = position.coords.latitude;
                var longitude = position.coords.longitude;

                output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

                var textnode = document.createTextNode("We found you..");

                output.appendChild(textnode);
                searchFoodSpotByLocation(latitude,longitude);
            }

            function error() {
                output.innerHTML = "Unable to retrieve your location";
            }

            output.innerHTML = "<p>Locating…</p>";

            navigator.geolocation.getCurrentPosition(success, error);
        }
    }
})();