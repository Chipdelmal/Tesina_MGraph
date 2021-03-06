(function () {
    'use strict';

    var _templateBase = './scripts';

    angular.module('app', [
        'ngRoute',
        'ngMaterial',
        'ngAnimate',
        'file-model',
    ])
    .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: _templateBase + '/index/index.html' ,
                controller: 'customerController',
                controllerAs: '_ctrl1'
            });
            $routeProvider.when('/menu', {
                templateUrl: _templateBase + '/menu/menu.html' ,
                controller: 'menuController',
                controllerAs: '_ctrl2'
            });
            $routeProvider.otherwise({ redirectTo: '/' });
        }
    ]);


})();
