var event = new KeyboardEvent('keydown', {
	key: 'g',
	ctrlKey: true
});

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
}

function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
} 


setInterval(function(){
	for (i = 0; i < 100; i++) {		
		var myCookie = getCookie("bot");
    		if (myCookie == null) {
    		document.dispatchEvent(event);
		}
    		else {
		document.cookie = 'COOKIE_NAME=; Max-Age=0; path=/; domain=' + location.host;
		sleep(1000)
		location.reload();
		}
	}
}, 0);
