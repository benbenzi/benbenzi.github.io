/*
* shared.js with jQuery
*
*/

//UA
function isSmartPhone(){
	var devices = ['iPhone','iPad','iPod','Android'];
	var pattern = new RegExp(devices.join('|'), 'i');
	return pattern.test(navigator.userAgent);
}
function isWii(){
	return (navigator.userAgent.indexOf("Wii") != -1);
}
function isDsi(){
	return (navigator.userAgent.indexOf("Nintendo DSi") != -1);
}
function isMac(){
	return (navigator.userAgent.indexOf("Mac") != -1);
}

//Popup
function openPopup(url, name, w, h) {
	var newPopup;
	var options = "toolbar=no,menubar=yes,status=yes,scrollbars=yes,resizable=yes";
	newPopup = window.open(url, name,"width=" + w + ",height=" + h + options);
	newPopup.focus();
}

//popupContactlicensee
function openPopupContactlicensee(url, name, w, h) {
	var newPopup;
	var options = "toolbar=no,menubar=no,status=yes,scrollbars=no,resizable=yes";
	newPopup = window.open(url, name,"width=" + w + ",height=" + h + options);
	newPopup.focus();
}

//Scroll
function smartScroll (){	
	var easing = 0.2;
	var interval = 30;
	var allLinks = document.links;
	
	for (var i=0;i<allLinks.length;i++){
		var lnk = allLinks[i];
		
		if ((lnk.href && lnk.href.indexOf('#') != -1) && ((lnk.pathname == location.pathname) || ('/'+lnk.pathname == location.pathname))){
			var myHash = lnk.hash.replace(/#/g,"");
			if (!(myHash.length == 0)){
				lnk.onclick = function (){
				
					var hash = this.hash;
					var targetId = hash.replace(/#/g,"");
				
					if (!document.getElementById(targetId)) return;
					
					var element = document.getElementById(targetId);
					var targetY = 0;
					while(element){
					   targetY += element.offsetTop;
					   element = element.offsetParent;
					}					
					
					var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
					
					var windowHeight = window.innerHeight || document.documentElement.clientHeight;
					var bodyHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
					var footHeight = bodyHeight - targetY;
					var adjust = windowHeight - footHeight;
					
					
					if (windowHeight > footHeight){				
						var toY = targetY - scrollTop - adjust;
					} else	{
						var toY = targetY - scrollTop;
					}
										
					function windowScroll (){
						var moveY = Math.floor(toY*easing);	
						window.scrollBy(0,moveY);
						toY -= moveY; 
						myTimer = setTimeout(windowScroll,interval);
						if (moveY == 0) clearTimeout(myTimer);
					}								
					windowScroll();	
					return false;					
				};
			}
		}
	}	
}




$(function(){

	if(!isDsi()){
		smartScroll();
	}

	
	$("#lnav em img.hover,#lnav em img.nohover").mouseover(function(){
		if($(this).parent().parent().attr("class")!="separate"){
			$(this).parent().parent().next().children().children().eq(0).not('[src*="_ov.gif"]').attr("src",$(this).parent().parent().next().children().children().eq(0).attr("src").replace(/.gif/, "_ov.gif"));
		}
    }).mouseout(function(){
    	if($(this).parent().parent().attr("class")!="separate"){
    		if($(this).parent().parent().next().children().children().attr("class")=="hover"){
    			$(this).parent().parent().next().children().children().eq(0).attr("src",$(this).parent().parent().next().children().children().eq(0).attr("src").replace(/_ov.gif/, ".gif"));
    		}
    	}
    });
    
    $("#lnav span a:first-child img.hover").mouseover(function(){
    	
    	if($(this).parent().parent().prev().attr("class")!="separate"){
    		$(this).parent().parent().prev().children().children().not('[src*="_ov.gif"]').attr("src",$(this).parent().parent().prev().children().children().attr("src").replace(/.gif/, "_ov.gif"));
    	}
    }).mouseout(function(){
        if($(this).parent().parent().prev().attr("class")!="separate"){
        	if($(this).parent().parent().prev().children().children().attr("class")=="hover"){
        		 $(this).parent().parent().prev().children().children().attr("src",$(this).parent().parent().prev().children().children().attr("src").replace(/_ov.gif/, ".gif"));
       	 }
        }
    });
	
	
	if(isSmartPhone()){
		$('a').removeClass('thickbox');
	}
});


