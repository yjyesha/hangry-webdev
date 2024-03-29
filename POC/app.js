/**
 * Created by yeshajoshi on 8/4/2017.
 */
(function () {
    angular
        .module("yelpFusionApp")
        .service("foodService", foodService);

    function foodService($http) {
        this.searchFoodSpotByCity = searchFoodSpotByCity;
        this.searchFoodSpotByLocation = searchFoodSpotByLocation;
        this.searchEatSpotById = searchEatSpotById;

        function searchEatSpotById(eId) {
            return $http.get('https://api.yelp.com/v3/businesses/'+eId, {
                headers: {'Content-Type':'application/x-www-form-urlencoded','Authorization': 'Bearer ZTE-0HHqsbQLo0zbqEAOvDuFKplK6l1N1zTw7T3_w-Hzja7x1VdenPu1-lA1P82VDjogZeywIoLN_WdOxFxJdt3Isl14v1Re73YOWiNOrB2H_4b5Ozg-LBwi3--DWXYx'}
            });
        }


        function searchFoodSpotByLocation(lat,lng) {
            return $http.get('https://api.yelp.com/v3/businesses/search?term=food&latitude='+lat+'&longitude='+lng, {
                headers: {'Content-Type':'application/x-www-form-urlencoded','Authorization': 'Bearer ZTE-0HHqsbQLo0zbqEAOvDuFKplK6l1N1zTw7T3_w-Hzja7x1VdenPu1-lA1P82VDjogZeywIoLN_WdOxFxJdt3Isl14v1Re73YOWiNOrB2H_4b5Ozg-LBwi3--DWXYx'}
            });
        }

        function searchFoodSpotByCity(city) {
                           var url = "/api/project/search/"+city;
                return $http.get(url)
                    .then(function (res)
                    {
                        return res.data;
                    });
        }
    }
})();