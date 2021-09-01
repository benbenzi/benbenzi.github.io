
//-------------------------------------------------------------------------------------
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
//-------------------------------------------------------------------------------------



var debug = 0;
var cDomain = "www.nintendo.co.jp";
var cPath   = "/ngc/ggfj/";

//クッキーの存在チェック
function checkCookie()
{
	if( document.cookie.indexOf("money") == -1 )
	{
		writeCookie("money",300);
		alert("ご訪問記念！300マネ進呈！");
	}
	
	if( document.cookie.indexOf("time") == -1 )
	{
		var md = new Date();
		writeCookie("time", md.getTime());
	}
	
	if( document.cookie.indexOf("quiz") == -1 )
	{
		writeCookie("quiz","xxxxxxxxxx");
	}
	
	if( document.cookie.indexOf("radio") == -1 )
	{
		writeCookie("radio","xxxxxxxxxxxxxxxxxxxxxx");
	}

}

//再訪問チェック
function thanksVisiter()
{
	var gt = 1000 * 60 * 60 * 24 * 7;
	if (debug) { gt = 15000; }
	var md = new Date();
	var ct = md.getTime() - readCookie("time");
	var mn = eval(readCookie("money"));
	if ( ct > gt && mn < 1000 )
	{
		writeCookie("money", eval(mn+100));
		alert("見に来てくれてありがとう！\n100マネプレゼントするよ！");
		writeCookie("time", md.getTime());
	}
}

//クイズ・クッキー用書き込み処理（全問正解時）
function writeQuiz(n)
{
	n = n - 1;
	var OX = new Array(10);
	if (debug) { alert(readCookie("quiz")); }
	OX = readCookie("quiz").split("");
	if (OX[n] == 'x')
	{
		OX[n] = 'o';
		writeCookie("quiz",OX.join(""));
		writeCookie("money", eval(readCookie("money"))+100);
		alert("100マネゲット！");
	}
	else
	{
		alert("100マネゲット");
		alert("…は１回だけ。");
	}
}

//ラジオ・クッキー用書き込み処理（100マネ支払い時）
function writeRadio(n)
{
	n = n - 1;
	var OX = new Array(22);
	if (debug) { alert(readCookie("radio")); }
	OX = readCookie("radio").split("");
	if (OX[n] == 'x')
	{
		OX[n] = 'o';
		writeCookie("radio",OX.join(""));
	}
}

//聴いた曲にチェックを
function checkRadio()
{
	var OX = new Array(22);
	OX = readCookie("radio").split("");
	for (var i=0; i<22; i++)
	{
		if(OX[i] == 'o')
		{
			document.myform.music[i].checked = true;
		}
	}
}

//マネ支払い
function listenMusic(n)
{
	var m = readCookie("money");
	if (m > 0)
	{
		if ( confirm("100マネ必要です。（現在" + m + "マネ持っています）") )
		{
			writeCookie("money", eval(readCookie("money"))-100);
			return true;
		}
		return false;
	}
	alert("100マネ必要です。貯めてからまた来てね！");
	return false;
}

//クッキーに書き込み
function writeCookie(key,value)
{
	document.cookie = key + "=" + value + ";expires=" + getExpires() + ";domain=" + cDomain + ";path=" + cPath + ";";
	if (debug) { alert(key + "=" + value); }
}

//クッキーを読み込む
function readCookie(key)
{
	var nakami = document.cookie + ";";
	var start = nakami.indexOf(key);
	
	if (start != -1)
	{
		var end = nakami.indexOf(";", start);
		var value = nakami.substring( (start + key.length + 1), end );
		return unescape(value);
	}
}

//クッキー削除
function deleteCookie(key)
{
	document.cookie = key + "=xxx;expires=Thu, 1-Jan-1999 00:00:00 GMT;";
	alert(key + "削除");
}

//有効期限
function getExpires()
{
	var t = new Date();
	t.setTime(t.getTime() + 60*60*24*60*1000);
	return t.toGMTString();
}

//1000マネにする
function maneGet()
{
	writeCookie("money",1000);
	alert("1000マネ持っています");
}
