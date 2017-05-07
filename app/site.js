var myModule = angular.module("recommender", ['ngAnimate', 'ngAria', 'ngMaterial'] ).controller('ratingController', 
    ['$scope', '$http', function($scope, $http){
        $scope.beging_rating = false;
        
        $scope.randomMovies = function(){
            $http({
                method: "GET",
                url: "/randommovies"
                }).then(function successCallback(response){
                    $scope.beging_rating = true;                
                    console.log(response);
                },
                function errorCallback(response){
                    console.log(response);
                })
            };
    }]);
