function isWin () { return (navigator.appVersion.indexOf ("Win") != -1); }
function isIE () { return (navigator.appName.indexOf ("Explorer") != -1); }
function isWinIE () { return (isWin () && isIE ()); }
function getFlashPlayerVersion() { if (navigator.plugins) with (navigator) { var s = "application/x-shockwave-flash"; if (mimeTypes && mimeTypes [s] && mimeTypes [s].enabledPlugin) nFlashPlayerVersion = navigator.plugins ["Shockwave Flash"].description.match (/\d+/); } return parseInt (nFlashPlayerVersion); }; var nFlashPlayerVersion = 0; if (isWinIE ()) document.write ('<scr' + 'ipt type="text/vbscript" language="VBScript"\>\nPrivate i, b\nOn Error Resume Next\nFor i = 8 To 1 Step -1\nb = (IsObject (CreateObject ("ShockwaveFlash.ShockwaveFlash." & i)))\nIf b Then \nnFlashPlayerVersion = i\nExit For\nEnd If\nNext\n</scr' + 'ipt\>');

function setFlash(monthNo,altName){
	if (getFlashPlayerVersion() < 7) {
		document.write (
		'<TABLE WIDTH="720" BORDER="0" ALIGN="CENTER" CELLSPACING="0" CELLPADDING="0">' +
		'<TR>' +
		'<TD WIDTH="241"><IMG SRC="img/noplugin_img/logo_nom.gif" ALT="N.O.M - Nintendo Online Magazine" WIDTH="241" HEIGHT="293"></TD>' +
		'<TD ROWSPAN="2"><A HREF="' + monthNo + '/index.html"><IMG SRC="img/noplugin_img/main' + monthNo + '.jpg" ALT="' + altName + '" WIDTH="479" HEIGHT="385" BORDER="0"></A></TD>' +
		'</TR>' +
		'<TR>' +
		'<TD WIDTH="241"><IMG SRC="img/noplugin_img/no' + monthNo + '.gif" ALT="' + altName + '" WIDTH="241" HEIGHT="92"></TD>' +
		'</TR>' +
		'<TR>' +
		'<TD COLSPAN="2"><IMG SRC="img/noplugin_img/bn' + monthNo + '.gif" ALT="Back Numbers" WIDTH="720" HEIGHT="60" BORDER="0" USEMAP="#bnMap"></TD>' +
		'</TR>' +
		'</TABLE>'
		);
	} else {
		document.write (
		'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="720" height="445">' +
		'<param name="movie" value="swf/main.swf?page=' + monthNo + '">' +
		'<param name="menu" value="false">' +
		'<param name="quality" value="high">' +
		'<param name="bgcolor" value="#FFFFFF">' +
		'<param name="allowScriptAccess" value="sameDomain">' +
		'<embed src="swf/main.swf?page=' + monthNo + '" menu="false" quality="high" bgcolor="#FFFFFF" width="720" height="445" swLiveConnect="true" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer"><\/embed><\/object><br>'
		);
	}
}