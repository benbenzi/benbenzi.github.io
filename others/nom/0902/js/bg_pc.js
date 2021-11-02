/*
 
Change Background-image

*/

var ua = navigator.userAgent

function changeBackimg(linkpass) {
	if(ua.indexOf("Nintendo DSi")!=-1){ // for DSi
		// no script
	} else if(ua.indexOf("Nintendo Wii")!=-1){ // for Wii
		// no script
	} else{ // for other UA
		document.write (
		'<LINK REL="stylesheet" HREF="' + linkpass + 'css/bg_pc.css" TYPE="text/css">'
		);
	};
}
