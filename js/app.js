angular.module('app', ['ngResource','ngRoute','ngSanitize'])
.config(['$routeProvider',function($routeProvider) {
    $routeProvider
        .when('/home',  { templateUrl: '/lojinha/templates/home.html', controller: 'homeCtrl'})
        .when('/sobre',  { templateUrl: '/lojinha/templates/sobre.html', controller: 'emptyCtrl'})
        .otherwise({redirectTo: '/home'});
}])
.factory('Items', ['$resource',function($resource){
    return $resource("/lojinha/json/items.json");
}])
.controller('homeCtrl', function($scope,Items,$routeParams){
    $scope.search = {vendido:false};
    $scope.items = Items.query();

    $scope.select = function (item){
        $scope.selected = item;
        $("#myModal").modal()
    }
})
.controller('emptyCtrl', function($scope,$routeParams){})
;
