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

	$(document.body).on('click','.sidebarToggleBtn',function(){
		var appSidebarHeight = $(window).height() - 55;
		var appBackdropHeight = appSidebarHeight;
		$('.appSidebar').css('height',appSidebarHeight);
		$('.appBackdrop').css('height',appBackdropHeight);
		$('.appSidebar').toggle('slide',{direction: 'right'},1000);
		$('.appBackdrop').toggle('fade',1000);
	});
	
	
	$(window).resize(function(){
		var appSidebarHeight = $(window).height() - 55;
		var appBackdropHeight = appSidebarHeight;
		$('.appSidebar').css('height',appSidebarHeight);
		$('.appBackdrop').css('height',appBackdropHeight);
	});
/*	$(document.body).on('click','.sidebarToggleBtn',function(){
		var appSidebarHeight = $(window).height() - 55;
		var appBackdropHeight = appSidebarHeight;
		$('.appSidebar').css('height',appSidebarHeight);
		$('.appBackdrop').css('height',appBackdropHeight);
		$('.appSidebar').toggle('slide',{direction: 'right'},1000);
		$('.appBackdrop').toggle('fade',1000);
	});*/
	$(document.body).on('click','.appBackdrop',function(){
		$(this).toggle('fade',1000);
		$('.appSidebar').toggle('slide',{direction: 'right'},1000);
	});
});
