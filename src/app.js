angular.module("sbf", ["ngMaterial", "ui.router", "sbf.field"], function($stateProvider){
	$stateProvider.state("players", {
		url: "",
		templateUrl: "src/views/players.html"
	}).state("scores", {
		url: "/scores",
		controller: "ScoresController",
		controllerAs: "vm",
		templateUrl: "src/views/scores.html"
	})
});