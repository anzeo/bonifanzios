angular.module("sbf").service("PlayersService", function($http){
    var scheme = {
        'gsx$name': {name:'name'},
        'gsx$lastname': {name:'lastName'},
        'gsx$nickname': {name:'nickname'}
    };

    return {
        getPlayers: getPlayers
    };

    function getPlayers(){
        return $http.get("https://spreadsheets.google.com/feeds/list/14Oj8Lzkfldel7-QPXtUigVDIgGpjDx5T5YSxXiV62hM/oohjye9/public/values?alt=json").then(parseResponse);
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
});