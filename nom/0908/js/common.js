/*
 
Change Background-image

*/

var ua = navigator.userAgent

function changeBackimg(linkpass) {
	if(ua.indexOf("Nintendo DSi")!=-1){ // for DSi
		document.write (
		'<LINK REL="stylesheet" HREF="' + linkpass + 'css/bg_dsi.css" TYPE="text/css">'
		);
	} else{ // for other UA
		
	};
}
