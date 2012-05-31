function notifier(dailyWord){ 
	notification = webkitNotifications.createNotification(
   		'conky.gif',
   		'Yaaaaay!',
   		'You found the word of the day!  Its ' + dailyWord + '!' 
  	);
	notification.show();
	setTimeout(function(){notification.cancel();}, 3000);
};

//listen for notifier
chrome.extension.onRequest.addListener(notifier);