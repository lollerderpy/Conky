var dailyWord = "Globular";
var searchin = $('*:contains("'+ dailyWord +'")');

function show(dailyWord){
	chrome.extension.sendRequest(dailyWord);
};

if( searchin.length >= 1){
	show(dailyWord);
};