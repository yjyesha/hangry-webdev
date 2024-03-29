/**
 * Created by yeshajoshi on 7/23/2017.
 */
(function () {
    //iife
    angular
        .module("WebAppMaker")
        .controller("profileController", profileController);

    function profileController($routeParams,userService,$location,$rootScope,sessionUser) {
        var model = this;
        var userId = sessionUser._id;

        model.manageeatSpot=manageeatSpot;
        model.updateUser = updateUser;
        model.deleteUser = deleteUser;

        function init() {
            model.userId = userId;
            console.log("idhar tak" + userId);
            userService.findUserById(userId)
                .then(function (response) {
                    console.log(response.data);
                    model.user = response.data;
                });
            userService.getAllUsers()
                .then(function (response) {
                    model.users = response;
                });
        }

        init();


        function updateUser(user) {
            userService.updateUser(user._id, user)
                .then(function (response) {
                    if (!response) {
                        model.error = "Error updating profile";
                    }
                    else {
                        model.successMessage = "Profile updated!";
                        $location.url("/profile");
                    }
                });
        }

        function deleteUser(userId) {
            userService.deleteUser(userId)
                .then(function (response) {
                    $location.url("/login");
                });
        }


        function manageeatSpot() {
            console.log(sessionUser);
            if (!sessionUser.eateryOwned) {
                $location.url("/eatSpot/new");
            }
            else {
                $location.url(sessionUser.eateryOwned._id + "/eatSpot/edit");
            }
        }
    }
})();