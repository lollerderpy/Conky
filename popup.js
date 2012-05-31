
var callbackSuccess = function(data) {
	var dailyWord = data;
  	startLookin(dailyWord);
};

var startLookin = function(dailyWord){
	var searchin = $('*:contains("'+ dailyWord +'")');

	if( searchin.length >= 1){
		show(dailyWord);
	};
};

var show = function(dailyWord){
	chrome.extension.sendRequest(dailyWord);
};

$.get('http://conky.apphb.com', callbackSuccess);