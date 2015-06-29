angular.module("sbf", ["ngMaterial", "ui.router"], function($stateProvider, $urlRouterProvider){
	$stateProvider.state("players", {
		url: "/players",
		templateUrl: "src/views/players.html"
	}).state("scores", {
		url: "/scores",
		controller: "ScoresController",
		controllerAs: "vm",
		templateUrl: "src/views/scores.html"
	});

	$urlRouterProvider.when("/", "/players");
});