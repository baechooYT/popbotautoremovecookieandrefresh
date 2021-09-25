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
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
} 


setInterval(function(){
	for (i = 0; i < 100; i++) {
		var myCookie = getCookie("bot");
    		if (myCookie == null) {
    		document.cookie = 'COOKIE_NAME=; Max-Age=0; path=/; domain=' + location.host;
		location.reload();
		}
    		else {
    		document.dispatchEvent(event);
		}
	}
}, 0);
