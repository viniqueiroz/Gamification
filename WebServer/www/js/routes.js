angular.module('my.routes', [])


.directive('simpleNavbar', function () {
   return {
     restrict: 'E',
     templateUrl: 'views/navbar.html'
   };
})

.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/views/home.html",
        controller: "homeCtrl"
    })
    .when("/addtarefa", {
        templateUrl : "/views/addtarefa.html",
        controller: "addTarefaCtrl"
    })
    .when("/cadastro", {
        templateUrl : "/views/cadastro.html",
        controller: "cadastroCtrl"
    })
    .when("/login", {
        templateUrl : "/views/login.html",
        controller: "loginCtrl"
    })
    .when("/ranking", {
        templateUrl : "/views/ranking.html",
        controller: "rankingCtrl"
    })
    .when("/adm", {
        templateUrl : "/views/adm.html",
        controller: "admCtrl"

    })
    .when('/404', {
         templateUrl: '/views/erro.html',
     })
     .otherwise('/404');
})
