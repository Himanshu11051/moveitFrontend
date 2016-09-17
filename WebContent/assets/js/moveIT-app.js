/* Move It App Custom JS File
 * @Author: Himanshu
 */ 
$(document).ready(function(){
	
	var mprogress = new Mprogress();
	mprogress.start();
	Waves.attach('.btn, .button', [ 'waves-button', 'waves-float' ]);
	Waves.init();
	setTimeout(function() {
		mprogress.end();
	},1000);

	$(document.body).on('click','.sidebarToggleBtn',function(e){
		var appSidebarHeight = $(window).height() - 55;
		var appBackdropHeight = appSidebarHeight;
		$('.appSidebar').css('height',appSidebarHeight);
		$('.appBackdrop').css('height',appBackdropHeight);
		$('.appSidebar').toggle('slide',{direction: 'right'},1000);
		$('.appBackdrop').toggle('fade',1000);
		
		if(!($('.appSidebar').is(':visible')) && $('.appBackdrop').is(':visible')){
			$('.appBackdrop').hide('slow');
		}
		
		e.stopImmediatePropagation();
		e.preventDefault();
		e.stopPropagation();
	});	
	$(window).resize(function(){
		var appSidebarHeight = $(window).height() - 55;
		var appBackdropHeight = appSidebarHeight;
		$('.appSidebar').css('height',appSidebarHeight);
		$('.appBackdrop').css('height',appBackdropHeight);
	});
	$(document.body).on('click','.appBackdrop',function(e){
		$(this).toggle('fade',1000);
		$('.appSidebar').toggle('slide',{direction: 'right'},1000);
		e.stopImmediatePropagation();
		e.preventDefault();
		e.stopPropagation();
	});
	
	$(document.body).on('click','.appSidebar li',function(e){
		$('.appBackdrop').toggle('fade',1000);
		$('.appSidebar').toggle('slide',{direction: 'right'},1000);
		e.stopImmediatePropagation();
		e.preventDefault();
		e.stopPropagation();
	});
});
