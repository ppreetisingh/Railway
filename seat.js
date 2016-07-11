var module = angular.module("myApp", ['ngRoute']);
    module.config(function($routeProvider) {
            $routeProvider
                    .when('/seat', {                    //Route1
                        templateUrl: 'temp/seat.html',
                        controller: 'SeatCtrl'
                    })
                    .when('/book', {                    //Route2
                        templateUrl: 'temp/book.html',
                        controller: 'BookCtrl'
                    })
                    .otherwise({                                 //Default Route
                        redirectTo: '/',
                        templateUrl:'temp/index1.html',
                        controller:'IndexCtrl'
                    });
        });

    module.controller("SeatCtrl", function($scope,Train,Reservation,$http) {
    
       $scope.setActive('seat');
    $scope.train;
    $http.get('railway.json').success(function(data,status){
    });
    console.log($scope.seat);
    $scope.reserve=function(code)
    {
        Reservation.add()
    }
});
    
    .controller('IndexCtrl',function($scope){
        
    })
	
	