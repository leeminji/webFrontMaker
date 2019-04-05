
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
			//메인메뉴
			objThis.mainGnb();

			//TweenMax.to($(".logo-area"), 1, {x:-10});
		},
		//메인
		main : function(){
			var objThis = this;

			//모션
			objThis.loadMotion();

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
})();
