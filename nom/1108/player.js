var u = navigator.userAgent;

$(window).load(function(){
	if (u.indexOf("Nitro") != -1 || u.indexOf("DSi") != -1 || u.indexOf("Wii") != -1 || u.indexOf("3DS") != -1){/* for DS & Wii */
	} else if (u.indexOf("Android")!=-1 || u.indexOf("iPhone")!=-1 || u.indexOf("iPod")!=-1) {
	} else {/* for PC */
		// ������s���̏���
		$("body").append('<div id="bg-layer"></div>');
		$('#bg-layer').css({'filter':'alpha(opacity=60)'});
		
		$('.ugomemoList a').click(function(){
			var t = $(this).attr('title') || $(this).attr('name') || null;
			var ns = $(this).attr('name');
			var na = $(this).attr('nameAlt');
			var cs = $(this).attr('comment');
			var ca = $(this).attr('commentAlt');
			var s = $(this).attr('swf');
			var g = $(this).attr('rel') || false;
			var parentID = $(this).parents('.ugomemoList:last')[0].id; //this�̐e�v�fID���擾
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
			activeBox += '<h2 class="boxTitle"><img src="../1108/images/title_box-select.gif" alt="" /></h2>';
			activeBox += '<h3 class="memoName"><img src="../1108/images/' + nameSrc + '" alt="' + nameAlt + '" /></h3>';
			activeBox += '<div id="outer"><div id="moviePlayer"><img src="../1108/images/img_noscript.gif" alt="���̃R���e���c�����y���݂��������ɂ́AJavaScript��L���ɂ��āA�ŐV��Adobe Flash Player���C���X�g�[�����Ă��������B�܂��A�j���e���h�[DS�ł����̕��́A�������܂����A�p�\�R���̃u���E�U��Wii�̃C���^�[�l�b�g�`�����l���ł������������B" /></div></div>';
			if(commentSrc){
				activeBox += '<dl class="memoComment">';
				activeBox += '<dt>�R��������̃R�����g</dt>';
				activeBox += '<dd><img src="../1108/images/' + commentSrc + '" alt="' + commentAlt + '" /></dd>'
				activeBox += '</dl>';
			}
			activeBox += '<ul id="controler" class="clearfix">';
			activeBox += '<li class="prev"><a href="javascript:void(0);">Prev</a></li>';
			activeBox += '<li class="close"><a href="javascript:void(0);">Close</a></li>';
			activeBox += '<li class="next"><a href="javascript:void(0);">Next</a></li>';
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
			swfobject.embedSWF("swf/" + swf, "moviePlayer", "380", "292", "9.0.45","", flashvars, params);
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
		// ���֑O�փ{�^���N���b�N��
		var filePath = "../1108/images/";
		var noscript = '<div id="moviePlayer"><img src="../1108/images/img_noscript.gif" alt="���̃R���e���c�����y���݂��������ɂ́AJavaScript��L���ɂ��āA�ŐV��Adobe Flash Player���C���X�g�[�����Ă��������B�܂��A�j���e���h�[DS�ł����̕��́A�������܂����A�p�\�R���̃u���E�U��Wii�̃C���^�[�l�b�g�`�����l���ł������������B" /></div>';
		var nextName = "";
		var nextComment = "";
		var nextNameAlt = "";
		var nextCommentAlt = "";
		var nextSwf = "";
		var boxNum = 0;
		var changeName = "";
		var changeNameAlt = "";
		var changeComment = "";
		var changeCommentAlt = "";
		var changeFlash = "";
		var groupList = $('a[rel=' + group + ']').get(); //�O���[�v���擾
		var boxVol = groupList.length;
		
		boxNum = id-1;
		
		if (u.indexOf("MSIE 6") != -1){
			$('.next').hide();
			$('.prev').hide();
		} else {
			if(boxNum == boxVol-1){$('.next').hide();}
			if(boxNum == 0){$('.prev').hide();}
		}
		
		// ����
		$('.next').click(function(){
			$('.prev').show();
			boxNum++;
			if(boxNum >= boxVol){boxNum = 0;}
			if(boxNum == boxVol-1){$('.next').hide();}
			
			// �l�擾
			nextName = groupList[boxNum].getAttribute('name');
			nextComment = groupList[boxNum].getAttribute('comment');
			nextNameAlt = groupList[boxNum].getAttribute('nameAlt');
			nextCommentAlt = groupList[boxNum].getAttribute('commentAlt');
			nextSwf = groupList[boxNum].getAttribute('swf');
			
			// �l�ݒ�
			changeName += nextName;
			changeNameAlt += nextNameAlt;
			changeComment += nextComment;
			changeCommentAlt += nextCommentAlt;

			// ����ւ�
			$('div.fadebox').attr('id','fbox'+(boxNum+1));
			$('div.fadebox .memoName img').attr('src',filePath+changeName);
			$('div.fadebox .memoName img').attr('alt',changeNameAlt);
			$('div.fadebox dd img').attr('src',filePath+changeComment);
			$('div.fadebox dd img').attr('alt',changeCommentAlt);
			$('div.fadebox #outer').html(noscript);
			
			// swf�ēǍ�
			var flashvars = {};	
			var params = {wmode: "transparent"};
			swfobject.embedSWF("swf/" + nextSwf, "moviePlayer", "380", "292", "9.0.45","", flashvars, params);
			
			resetStr();
		});
		
		// �O��
		$('.prev').click(function(){
			$('.next').show();
			boxNum--;
			if(boxNum < 0){boxNum = boxVol-1;}
			if(boxNum == 0){$('.prev').hide();}
			
			// �l�擾
			nextName = groupList[boxNum].getAttribute('name');
			nextComment = groupList[boxNum].getAttribute('comment');
			nextNameAlt = groupList[boxNum].getAttribute('nameAlt');
			nextCommentAlt = groupList[boxNum].getAttribute('commentAlt');
			nextSwf = groupList[boxNum].getAttribute('swf');
			
			// �l�ݒ�
			changeName += nextName;
			changeNameAlt += nextNameAlt;
			changeComment += nextComment;
			changeCommentAlt += nextCommentAlt;
			
			// ����ւ�
			$('div.fadebox').attr('id','fbox'+(boxNum+1));
			$('div.fadebox .memoName img').attr('src',filePath+changeName);
			$('div.fadebox .memoName img').attr('alt',changeNameAlt);
			$('div.fadebox dd img').attr('src',filePath+changeComment);
			$('div.fadebox dd img').attr('alt',changeCommentAlt);
			$('div.fadebox #outer').html(noscript);
			
			// swf�ēǍ�
			var flashvars = {};	
			var params = {wmode: "transparent"};
			swfobject.embedSWF("swf/" + nextSwf, "moviePlayer", "380", "292", "9.0.45","", flashvars, params);
			
			resetStr();
		});
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