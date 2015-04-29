angular.module("sbf", ["ngMaterial", "ui.router", "sbf.field"], function($stateProvider){
	$stateProvider.state("home", {
		url: ""
	}).state("games", {
		url: "/games"
	})
});