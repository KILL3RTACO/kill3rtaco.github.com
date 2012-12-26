function sticky_relocate() {
	var window_top = $(window).scrollTop();
	var div_top = $('#sticky-anchor').offset().top;
	if (window_top > div_top){
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