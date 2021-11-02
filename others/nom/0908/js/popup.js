function soundpop01(){
	var leftPos = (window.screen.width - 788) / 2;
	var topPos = (window.screen.height - 500) / 2;
	NewWin = window.open('./pop01.html','soundpop01','width=788,height=500,toolbar=0,location=0,status=0,menubar=0,scrollbars=1,resizable=1,left=' + leftPos+ ',top=' + topPos+ '');
	NewWin.focus();
}

function tinglepop(num){
	var leftPos = (window.screen.width - 788) / 2;
	var topPos = (window.screen.height - 500) / 2;
	NewWin = window.open('./pop'+num+'.html','soundpop'+num,'width=788,height=500,toolbar=0,location=0,status=0,menubar=0,scrollbars=1,resizable=1,left=' + leftPos+ ',top=' + topPos+ '');
	NewWin.focus();
}
