angular.module("sbf").service("ScoresService", function($http){
    var scheme = {
        'gsx$awayteam': {name:'awayTeam'},
        'gsx$awayscore': {name:'awayScore'},
        'gsx$hometeam': {name:'homeTeam'},
        'gsx$homescore': {name:'homeScore'},
        'gsx$date': {name:'date'},
        'gsx$iswin': {name:'isWin', map: parseBoolean}
    };

    return {
        getScores: getScores
    };

    function getScores(){
        return $http.get("https://spreadsheets.google.com/feeds/list/14Oj8Lzkfldel7-QPXtUigVDIgGpjDx5T5YSxXiV62hM/od6/public/values?alt=json").then(parseResponse);
    }

    function parseResponse(response){
        var parsedData = [];
        response.data.feed.entry.forEach(function(entry){
            parsedData.push(parseEntry(entry));
        });
        return parsedData;
    }

    function parseEntry(entry){
        var parsedEntry = {};
        for(var property in entry){
            if(scheme[property]){
                parsedEntry[scheme[property].name] = scheme[property].map ? scheme[property].map(entry[property].$t) : entry[property].$t;
            }
        }
        return parsedEntry;
    }

    function parseBoolean(string){
        return string.toLowerCase() === 'true';
    }
});