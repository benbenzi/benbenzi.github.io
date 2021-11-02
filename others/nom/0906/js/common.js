function popWin(num){
	var leftPos = (window.screen.width - 560) / 2;
	var topPos = (window.screen.height - 390) / 2;
	NewWin = window.open('../movie.html?movienum='+num,'downloadWin','width=560,height=390,toolbar=0,location=0,status=0,menubar=0,scrollbars=0,resizable=1,left=' + leftPos+ ',top=' + topPos+ '');
	NewWin.focus();
}