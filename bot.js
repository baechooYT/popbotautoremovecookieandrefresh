var event = new KeyboardEvent('keydown', {
	key: 'g',
	ctrlKey: true
});

function getCookie(cookieName){
    var cookieValue=null;
    if(document.cookie){
        var array=document.cookie.split((escape(cookieName)+'='));
        if(array.length >= 2){
            var arraySub=array[1].split(';');
            cookieValue=unescape(arraySub[0]);
        }
    }
    return cookieValue;
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
