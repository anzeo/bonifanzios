angular.module("sbf", ["ngMaterial", "ui.router", "sbf.field"], function($stateProvider){
	$stateProvider.state("players", {
		url: "",
		templateUrl: "src/views/players.html"
	}).state("games", {
		url: "/games",
		controller: "GamesController",
		controllerAs: "GamesController",
		templateUrl: "src/views/games.html"
	})
});