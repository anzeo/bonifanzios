angular.module('sbf').factory('ResponseParserFactory', function () {

    return {
        getResponseParser: getResponseParser
    };

    function getResponseParser(scheme){
        return function(response){
            return parseResponse(response, scheme);
        }
    }

    function parseResponse(response, scheme) {
        var parsedData = [];
        response.data.feed.entry.forEach(function (entry) {
            parsedData.push(parseEntry(entry, scheme));
        });
        return parsedData;
    }

    function parseEntry(entry, scheme) {
        var parsedEntry = {};
        for (var property in entry) {
            if (scheme[property]) {
                parsedEntry[scheme[property].name] = scheme[property].map ? scheme[property].map(entry[property].$t) : entry[property].$t;
            }
        }
        return parsedEntry;
    }
});