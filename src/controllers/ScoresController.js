angular.module("sbf").controller("ScoresController", function(ScoresService){
	var controller = this;

	ScoresService.getScores().then(function(data){
		controller.scores = data;
	})
});