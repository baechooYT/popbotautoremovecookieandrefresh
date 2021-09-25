var event = new KeyboardEvent('keydown', {
	key: 'g',
	ctrlKey: true
});

setInterval(function(){
	for (i = 0; i < 100; i++) {
		getCookie("bot");
    		if (myCookie == null) {
    		document.cookie = 'COOKIE_NAME=; Max-Age=0; path=/; domain=' + location.host;
		location.reload();
		}
    		else {
    		document.dispatchEvent(event);
		}
	}
}, 0);
