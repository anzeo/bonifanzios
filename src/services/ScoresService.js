angular.module("sbf").service("ScoresService", function($http, ResponseParserFactory){
    var scheme = {
        'gsx$awayteam': {name:'awayTeam'},
        'gsx$awayscore': {name:'awayScore'},
        'gsx$hometeam': {name:'homeTeam'},
        'gsx$homescore': {name:'homeScore'},
        'gsx$date': {name:'date'},
        'gsx$iswin': {name:'isWin', map: parseBoolean}
    };
    var responseParser = ResponseParserFactory.getResponseParser(scheme);

    return {
        getScores: getScores
    };

    function getScores(){
        return $http.get("https://spreadsheets.google.com/feeds/list/14Oj8Lzkfldel7-QPXtUigVDIgGpjDx5T5YSxXiV62hM/od6/public/values?alt=json").then(responseParser);
    }

    function parseBoolean(string){
        return string.toLowerCase() === 'true';
    }
});