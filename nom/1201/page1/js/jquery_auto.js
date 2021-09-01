// jQuery_Auto 0.9
// Automatic functions for webpages (using the wonderful jQuery library)

// Copyright: (c) 2006, Michal Tatarynowicz (tatarynowicz@gmail.com)
// Licenced as Public Domain (http://creativecommons.org/licenses/publicdomain/)
// $Id: jquery_auto.js 426 2006-05-06 19:54:39Z Michaﾅ・ $


// Initialization

$.auto = {
	init: function() {
		for (module in $.auto) {
			if ($.auto[module].init)
				$.auto[module].init();
		}
	}
};

$(document).ready($.auto.init);


// Auto-hidden elements

$.auto.hide = {
	init: function() {
		$('.Hide').hide();
	}
};

// Mouse hover

$.auto.hover = {

	init: function() {
	
	$('IMG.hover').not('[src*="_ov."]')
			.bind('mouseover', this.enter)
			.bind('mouseout', this.exit)
			.each(this.preload);
	},

	preload: function() {
		this.preloaded = new Image;
		this.preloaded.src = this.src.replace(/^(.+)(\.[a-z]+)$/, "$1_ov$2");
	},

	enter: function() {
		this.src = this.src.replace(/^(.+)(\.[a-z]+)$/, "$1_ov$2");
	},

	exit: function() {
		this.src = this.src.replace(/^(.+)_ov(\.[a-z]+)$/, "$1$2");
	}
};


// Auto-submitting SELECTs

$.auto.submit = {
	init: function() {
		$('SELECT.Submit').bind('change', this.on_change);
	},

	on_change: function() {
		if (this.value) this.form.submit();
	}
};


// Auto-selected text in text fields after a label click

$.auto.select = {
	init: function() {
		$('LABEL.Select').each(this.label_action);
		$('INPUT.Select').bind('click', function(){ this.select(); });
	},

	label_action: function() {
		var field = $('#'+this.htmlFor).get(0);
		if (field && field.focus && field.select) {
			$(this).bind('click', function(){ field.focus(); field.select(); });
		}
	}
};


// Switches tabs on click

$.auto.tabs = {

	init: function() {

		$('.Tabs').each(function(){
			var f = $.auto.tabs.click;
			var group = this;
			$('.Tab', group).each(function(){
				this.group = group;
				$(this).click(f);
				$('#'+this.id+'_body').hide();
			}).filter(':first').trigger('click');
		});

	},

	click: function() {
		var tab = $('#'+this.id+'_body').get(0);
		$('.Tab', this.group).each(function(){
			$(this).removeClass('Active');
			$('#'+this.id+'_body').hide();
		});

		$(this).addClass('Active');
		$(tab).show();
		this.blur();

		return false;
	}

};