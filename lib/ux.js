//ux 라이브러리
var ux = (function(){
	return {
		menu : function(_jsonMenu){
			//메뉴셋팅
			var uxMenu = {
				menuJSON : null,
				count : 0,
				init : function(_jsonMenu){
					var thisObj = this;
					//초기셋팅
					thisObj.menuJSON = _jsonMenu;
					
					//메뉴 설정 element
					return thisObj.setMenu("menu");
				},
				//4차 메뉴까지 셋팅가능함.
				setMenu : function(el){
					var thisObj = this;
					var strMenu = "";
					for( var obj in thisObj.menuJSON.all ){

						var m = thisObj.menuJSON.all[obj];
						strMenu += "<li><a href='"+m.link+"'><span>"+m.name+"</span></a>";
						if( thisObj.menuJSON.menu01 ){
							//2차메뉴
							var depth2 = thisObj.menuJSON.menu01.filter(thisObj.filterByCode, {s : m.code});
							var str = depth2.map(function(m, i){
								var str = "<li><a href='"+m.link+"'><span>"+ m.name + "</span></a>";
								//3차메뉴
								if( thisObj.menuJSON.menu02 ){
									var depth3 = thisObj.menuJSON.menu02.filter(thisObj.filterByCode, {s:m.code});
									if( depth3.length > 0 ){
										var str2 = depth3.map(function(m, i){
											var str =  "<li><a href='"+m.link+"'><span>"+m.name+"</span></a>";
											//4차메뉴
											if( thisObj.menuJSON.menu03 ){
												var depth4 = thisObj.menuJSON.menu03.filter(thisObj.filterByCode, {s:m.code});
												if( depth4.length > 0 ){
													var str3 = depth4.map(function(m,i){
														return "<li><a href='"+m.link+"'><span>"+m.name+"</span></a></li>";
													});
													str += "<ul>"+str3.join('')+"</ul>";
												}
											}
											str += "</li>";
											return str;
										});
										str += "<ul>"+str2.join('')+"</ul>";
									}
								}
								str+="</li>";
								return str;
							});
							
							if( str.length > 0 ){
								strMenu +="<ul>"+str.join('')+"</ul>";
							}
						}
						strMenu +="</li>";

					}
					return strMenu;
				},
				filterByCode : function(item){
					if ( item.code.substring(0,this.s.length) == this.s) {
						return true;
					}
					return false; 
				}
			};
			//넘기기
			return uxMenu.init(_jsonMenu);
		}
	}
})();

module.exports = ux;