angular.module("sbf").controller("GamesController", function(){
	var controller = this;
	controller.isGameAWin = isGameAWin; 

	controller.games = [
	{
		date: new Date(),
		homeTeam: {
			isSportingBonifanzios: true,
			name: "Sporting Bonifanzios",
			score: 5
		},
		awayTeam: {
			isSportingBonifanzios: false,
			name: "FC De Kampioenen",
			score: 0
		}
	},
	{
		date: new Date(),
		homeTeam: {
			isSportingBonifanzios: false,
			name: "FC Barcelona",
			score: 99
		},
		awayTeam: {
			isSportingBonifanzios: true,
			name: "Sporting Bonifanzios",
			score: 0
		}
	}];

	function isGameAWin(game){
		return game.homeTeam.isSportingBonifanzios ? isGameAWinForHomeTeam(game) : !isGameAWinForHomeTeam(game);
	}

	function isGameAWinForHomeTeam(game){
		return game.homeTeam.score > game.awayTeam.score;
	}
});