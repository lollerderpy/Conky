function show(){
	var notification = window.webkitNotifications.createNotification(
   		<img src="http://26.media.tumblr.com/tumblr_ltfm9geEsT1qmaa05o1_500.gif" />// The image.
  );
	notification.show();
};

// From the background page...
chrome.extension.getViews({type:"notification"}).forEach(function(show) {
  show.show();
});