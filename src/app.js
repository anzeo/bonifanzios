angular.module("sbf", ["ngMaterial", "ui.router"], function($stateProvider, $urlRouterProvider){
	$stateProvider.state("players", {
		url: "/players",
		controller: "PlayersController",
		controllerAs: "vm",
		templateUrl: "src/views/players.html",
		data: {
			title: 'Spelers'
		}
	}).state("scores", {
		url: "/scores",
		controller: "ScoresController",
		controllerAs: "vm",
		templateUrl: "src/views/scores.html",
		data: {
			title: 'Uitslagen'
		}
	});

	$urlRouterProvider.when("/", "/players");
}).run(function($rootScope, $state){
	$rootScope.$state = $state;
});