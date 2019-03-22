
/* ux.js */

$(document).ready(function(){
	ux.common();
});

var ux = {
	//공통
	common : function(){
		var objThis = this;
		//메인메뉴
		objThis.mainGnb();
	},
	//메인
	main : function(){
		var objThis = this;
		//메인슬라이드
		var mainVisual = $('#main-visual').bxSlider({
			mode: "fade", //'horizontal', 'vertical', 'fade'
			speed: 1000,
			pause: 4000,
			stopAutoOnClick: true,
			auto: true,
			preventDefaultSwipeX: true,
			controls: false,
			autoHover: true,
			pager: false
		});
		//모션
		objThis.loadMotion();
		
		//갤러리
		$("#gallery-main-list").slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			responsive : [
				{
					breakpoint : 1024,
					settings : {
						slidesToShow : 3 
					}
				},
				{
					breakpoint : 768,
					settings : {
						slidesToShow : 2 
					}
				}
			]
		});
	},
	mainGnb : function(){
		var menu = $("#main-gnb-area");
		//전체메뉴오픈
		$("#btn-main-menu").on("click", function(e){
			e.preventDefault();
			menu.addClass("on");
		});
		//전체메뉴닫기
		$("#btn-main-menu-close").on("click", function(e){
			e.preventDefault();
			menu.removeClass("on");
		});
	},
	loadMotion : function(){
		var $motion = $('.n-motion');
		var windowT;
		if($motion.length){
			$motion.each(function(i){
				var $this = $(this);
				var thisT = $this.offset().top;
				var thisH = $this.height() / 2;
				var thisP = thisT + thisH;
				var event = 'load.'+i+' scroll.'+i;
				$(window).on(event, function(){
					windowT = $(window).scrollTop() + $(window).outerHeight();
					if(windowT > thisP-300){
						$this.addClass('n-active');
						$(window).off(event);
					}
				});
			});
		}
	},
	selectBox : function(el){
		el.each(function(){
			var thisEl = $(this);
			var btn = $(this).children("a");
			var list = $(this).children("ul");
			btn.on("click", function(e){
				e.preventDefault();
				if( thisEl.hasClass("on") ){
					thisEl.removeClass("on");
				}else{
					thisEl.addClass("on");
				}
			});
		});
	}
}