var tabs = $('.tabs');

$('.tab').hide();

tabs.find('a').on('click', function(e){
	e.preventDefault();
	tabs.find('.current').removeClass('current');
	$(this).addClass('current');
	
	var newTab = $(this.hash);
	var newHeight = newTab.height();
	var container = $('.tab-content');

	newTab.siblings(':visible').fadeOut('fast');
	container.animate({'height': newHeight}, 300, function(){
		newTab.fadeIn('fast');
	});

}).first().click();