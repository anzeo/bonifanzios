angular.module("sbf").controller("PlayersController", function(PlayersService){
    var controller = this;

    PlayersService.getPlayers().then(function(data){
       controller.players = data;
    });
});