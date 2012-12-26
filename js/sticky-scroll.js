function sticky_relocate() {
	var window_top = $(window).scrollTop();
	var menu_bottom = $('#cssmenu').offset().bottom;
	if (window_top > menu_bottom){
		$('#info-page-sidebar').removeClass('unstick');
		$('#info-page-sidebar').addClass('stick');
	}else{
		$('#info-page-sidebar').removeClass('stick');
		$('#info-page-sidebar').addClass('unstick');
	}
}
$(function() {
	$(window).scroll(sticky_relocate);
	sticky_relocate();
});