angular.module("sbf", ["ngMaterial", "ui.router"], function($stateProvider, $urlRouterProvider){
	$stateProvider.state("players", {
		url: "/players",
		controller: "PlayersController",
		controllerAs: "vm",
		templateUrl: "src/views/players.html",
		data: {
			tabIndex: 0
		}
	}).state("scores", {
		url: "/scores",
		controller: "ScoresController",
		controllerAs: "vm",
		templateUrl: "src/views/scores.html",
		data: {
			tabIndex: 1
		}
	});

	$urlRouterProvider.otherwise("/players");
});