angular.module("sbf").service("PlayersService", function($http, ResponseParserFactory){
    var scheme = {
        'gsx$name': {name:'name'},
        'gsx$lastname': {name:'lastName'},
        'gsx$nickname': {name:'nickname'}
    };
    var responseParser = ResponseParserFactory.getResponseParser(scheme);

    return {
        getPlayers: getPlayers
    };

    function getPlayers(){
        return $http.get("https://spreadsheets.google.com/feeds/list/14Oj8Lzkfldel7-QPXtUigVDIgGpjDx5T5YSxXiV62hM/oohjye9/public/values?alt=json").then(responseParser);
    }
});