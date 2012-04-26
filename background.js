chrome.extension.onRequest.addListener(
	function(){ 
		notification = webkitNotifications.createNotification(
	   		'conky.gif',
	   		'Yaaaaay!',
	   		'You found the word of the day'
	  	);
		notification.show();
		setTimeout(function(){notification.cancel();}, 1500);
	}
);