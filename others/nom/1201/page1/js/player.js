var u = navigator.userAgent;

$(window).load(function(){
	if (u.indexOf("Nitro") != -1 || u.indexOf("DSi") != -1 || u.indexOf("Wii") != -1 || u.indexOf("3DS") != -1){/* for DS & Wii */
	} else if (u.indexOf("Android")!=-1 || u.indexOf("iPhone")!=-1 || u.indexOf("iPod")!=-1) {
	} else {/* for PC */
		// ������s���̏���
		$("body").append('<div id="bg-layer"></div>');
		$('#bg-layer').css({'filter':'alpha(opacity=60)'});
		
		$('.nomMovie a').click(function(){
			var t = $(this).attr('title') || $(this).attr('name') || null;
			var ns = $(this).attr('name');
			var na = $(this).attr('nameAlt');
			var cs = $(this).attr('comment');
			var ca = $(this).attr('commentAlt');
			var s = $(this).attr('swf');
			var g = $(this).attr('rel') || false;
			var parentID = $(this).parents('.nomMovie:last')[0].id; //this�̐e�v�fID���擾
			var num = $('#' + parentID + ' a').index(this);
			var id = num+1;
			
			fadebox(id,t,ns,na,cs,ca,s,g);
			return false;
		});
	}
});



function fadebox(id,title,nameSrc,nameAlt,commentSrc,commentAlt,swf,group){// ID�擾
	if (u.indexOf("Nitro") != -1 || u.indexOf("DSi") != -1 || u.indexOf("Wii") != -1 || u.indexOf("3DS") != -1){/* for DS & Wii */
	} else if (u.indexOf("Android")!=-1 || u.indexOf("iPhone")!=-1 || u.indexOf("iPod")!=-1) {
	} else {/* for PC */
		$("body","html").css({height: "100%", width: "100%"});
		if (typeof document.body.style.maxHeight == "undefined") {//if IE 6
			$("body","html").css({height: "100%", width: "auto"});
			$("html").css("overflow","");
		}
		var speed = 'normal';
		var wh = $(window).height();
		var st = $(document).scrollTop();
		var activeBox = "";
			activeBox += '<div id="fbox' + id + '" class="fadebox">';
			activeBox += '<h2 class="boxTitle"><img src="images/title_box-select.gif" alt="" /></h2>';
			activeBox += '<div id="outer"><div id="moviePlayer"><img src="images/img_noscript.gif" alt="���̃R���e���c�����y���݂��������ɂ́AJavaScript��L���ɂ��āA�ŐV��Adobe Flash Player���C���X�g�[�����Ă��������B�܂��A�j���e���h�[DS�ł����̕��́A�������܂����A�p�\�R���̃u���E�U��Wii�̃C���^�[�l�b�g�`�����l���ł������������B" /></div></div>';
			if(commentSrc){
				
			}
			activeBox += '<ul id="controler" class="clearfix">';
			activeBox += '<li class="close"><a href="javascript:void(0);">Close</a></li>';
			activeBox += '</ul>';
			activeBox += '</div>' ;
		
		/* -------------------------------------- */
		// Box�̃Z�b�g�A�b�v
		function setBox(){
			var thisBox = $('#fbox' + id);// �\��������{�b�N�X
			var tw = $('#fbox' + id).width();// �{�b�N�XID�̕�
			var th = $('#fbox' + id).height();// �{�b�N�XID�̍���
			$('#fbox' + id).addClass(group);
			$('#fbox' + id).css({
				'top':(wh/2)+st,
				'left':'50%',
				'margin-top':-(th/2),
				'margin-left':-(tw/2)
			}).fadeIn(speed);
			/* -------------------------------------- */
			// embed flash ����̂�
			var flashvars = {};	
			var params = {wmode: "transparent"};
			swfobject.embedSWF("swf/" + swf, "moviePlayer", "394", "267", "9.0.45","", flashvars, params);
			/* -------------------------------------- */
		}
		/* -------------------------------------- */
		
		/* -------------------------------------- */
		// Box�Ɣw�i�̖��ߍ���
		$('body').append(activeBox);
		setBox();
		$("#bg-layer").fadeIn(speed);
		/* -------------------------------------- */
		
		
		
		/* -------------------------------------- */
		// ������
		function resetStr(){
			changeName = "";
			changeNameAlt = "";
			changeComment = "";
			changeCommentAlt = "";
			changeFlash = "";
		}
		/* -------------------------------------- */
		
		/* -------------------------------------- */
		// �w�i�N���b�N �� �N���[�Y�{�^���N���b�N��
		$("#bg-layer").click(function(){ bgClose(); });
		$("#controler .close").click(function(){ bgClose(); });
		/* -------------------------------------- */
		
		/* -------------------------------------- */
		// �w�i�B��
		function bgClose(){
			$("#bg-layer").fadeOut(speed);
			$('div.fadebox').fadeOut(speed,function(){$('div.fadebox').remove()});
		}
		/* -------------------------------------- */
	}
}