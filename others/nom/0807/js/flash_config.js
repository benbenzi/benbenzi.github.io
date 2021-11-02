function isWin () { return (navigator.appVersion.indexOf ("Win") != -1); }
function isIE () { return (navigator.appName.indexOf ("Explorer") != -1); }
function isWinIE () { return (isWin () && isIE ()); }
function getFlashPlayerVersion() { if (navigator.plugins) with (navigator) { var s = "application/x-shockwave-flash"; if (mimeTypes && mimeTypes [s] && mimeTypes [s].enabledPlugin) nFlashPlayerVersion = navigator.plugins ["Shockwave Flash"].description.match (/\d+/); } return parseInt (nFlashPlayerVersion); }; var nFlashPlayerVersion = 0; if (isWinIE ()) document.write ('<scr' + 'ipt type="text/vbscript" language="VBScript"\>\nPrivate i, b\nOn Error Resume Next\nFor i = 8 To 1 Step -1\nb = (IsObject (CreateObject ("ShockwaveFlash.ShockwaveFlash." & i)))\nIf b Then \nnFlashPlayerVersion = i\nExit For\nEnd If\nNext\n</scr' + 'ipt\>');

//通常の代替画像用
function setFlash(verNumber,swfImgName,swfImgWidth,swfImgHeight,swfBgColor,pluginImgName,pluginImgAlt,pluginImgWidth,pluginImgHeight,mapMode,mapName){
	if (getFlashPlayerVersion() < verNumber && mapMode == 1) {
		document.write (
		'<P><img src="' + pluginImgName + '" alt="' + pluginImgAlt + '" width="' + pluginImgWidth + '" height="' + pluginImgHeight + '" usemap="' + mapName + '"></P>'
		);
	} else if (getFlashPlayerVersion() < verNumber && mapMode == 0) {
		document.write (
		'<P><img src="' + pluginImgName + '" alt="' + pluginImgAlt + '" width="' + pluginImgWidth + '" height="' + pluginImgHeight + '" usemap="' + mapName + '"></P>'
		);
	} else {
		if(isWinIE()) {
			document.write (
			'<P><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=' + verNumber + ',0,0,0" width="' + swfImgWidth + '" height="' + swfImgHeight + '">' +
			'<param name="movie" value="' + swfImgName + '">' +
			'<param name="menu" value="false">' +
			'<param name="quality" value="high">' +
			'<param name="wmode" value="opaque">' +
			'<param name="bgcolor" value="' + swfBgColor + '">' +
			'<param name="allowScriptAccess" value="sameDomain">' +
			'<embed src="' + swfImgName + '" menu="false" quality="high" wmode="opaque" bgcolor="' + swfBgColor + '" width="' + swfImgWidth + '" height="' + swfImgHeight + '" swLiveConnect="true" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer"><\/embed><\/object></P>'
			);
		} else {
			document.write (
			'<P><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=' + verNumber + ',0,0,0" width="' + swfImgWidth + '" height="' + swfImgHeight + '">' +
			'<param name="movie" value="' + swfImgName + '">' +
			'<param name="menu" value="false">' +
			'<param name="quality" value="high">' +
			'<param name="bgcolor" value="' + swfBgColor + '">' +
			'<param name="allowScriptAccess" value="sameDomain">' +
			'<embed src="' + swfImgName + '" menu="false" quality="high"  bgcolor="' + swfBgColor + '" width="' + swfImgWidth + '" height="' + swfImgHeight + '" swLiveConnect="true" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer"><\/embed><\/object></P>'
			);
		}
		
	}
}

//IFRAMEの代替え
function setFlash_ifream(verNumber,swfImgName,swfImgWidth,swfImgHeight,swfBgColor,pluginImgName,pluginImgAlt,pluginImgWidth,pluginImgHeight,mapMode,mapName,frameName,framesrcName){
	if (getFlashPlayerVersion() < verNumber && mapMode == 1) {
		document.write (
		'<P><img src="' + pluginImgName + '" alt="' + pluginImgAlt + '" width="' + pluginImgWidth + '" height="' + pluginImgHeight + '" usemap="' + mapName + '"></P>'
		);
	} else if (getFlashPlayerVersion() < verNumber && mapMode == 0) {
		document.write (
		'<IFRAME SRC="' + framesrcName + '" WIDTH="' + pluginImgWidth + '" HEIGHT="' + pluginImgHeight + '" NAME="' + frameName + '" TITLE="' + pluginImgAlt + ' FRAMEBORDER="0" SCROLLING="NO">IFRAMEを表示できるブラウザでご覧ください。</IFRAME>'
		);
	} else {
		document.write (
		'<P><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=' + verNumber + ',0,0,0" width="' + swfImgWidth + '" height="' + swfImgHeight + '">' +
		'<param name="movie" value="' + swfImgName + '">' +
		'<param name="menu" value="false">' +
		'<param name="quality" value="high">' +
		'<param name="wmode" value="opaque">' +
		'<param name="bgcolor" value="' + swfBgColor + '">' +
		'<param name="allowScriptAccess" value="sameDomain">' +
		'<embed src="' + swfImgName + '" menu="false" quality="high" wmode="opaque" bgcolor="' + swfBgColor + '" width="' + swfImgWidth + '" height="' + swfImgHeight + '" swLiveConnect="true" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer"><\/embed><\/object></P>'
		);
	}
}
