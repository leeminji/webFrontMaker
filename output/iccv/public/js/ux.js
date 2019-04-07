
/* ux.js */

$(document).ready(function(){
	ux.common();
});

$(window).on('load', function(){

	//로딩중표시
	ux.loader($("#loading")).hide();

	//hash 값이 있으면 자동이동
	var hash = window.location.hash;
	if( hash != "" ){
		ux.hashToScroll(hash);
	}
});

var ux = (function(){
	var $window = $(window);
	//달력
	var settingDatepicker = {
		showOn: "both",
		buttonImage: "/public/images/common/icon-input-calendar.png",
		buttonImageOnly: true,
		changeMonth: true,
		numberOfMonths: 1,
		changeYear: true,
		dateFormat: "mm/dd/yy"
	}
	return {
		hashToScroll : function(_hash){
			var sub = $(_hash);
			if( sub.length > 0 ){
				var _top = sub.offset().top;
				$('html, body').scrollTop(0).stop().animate({scrollTop : _top}, 1000);
			}
		},
		loader : function(_el){
			var el = _el;
			return{
				hide : function(){
					el.css('display','none');
				}
			}
		},
		//공통
		common : function(){
			var objThis = this;
			//달력
			$(".datepicker").datepicker(settingDatepicker);

		},
		//메인
		main : function(){
			var objThis = this;
		},
		/*
			openPopup( el: 해당 id, is_all_close : 열려있는 팝업닫기);
		*/
		openPopup : function(el , is_all_close){
			if( is_all_close ) $(".alert-module").removeClass('is-active').attr('style', '');
			$("#blind").addClass('is-active');
			$("#"+el).attr('style', '').addClass('is-active').css({
				'top' : $(window).scrollTop()+100
			});
		},
		closePopup : function(el, is_all_close){
			if( is_all_close ) $(".alert-module").removeClass('is-active').attr('style', '');
			$("#blind").removeClass('is-active');
			$("#"+el).removeClass('is-active').attr('style', '');
		}
	}
})();
