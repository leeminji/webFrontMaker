var client = require('cheerio-httpcli');
var urlType = require('url');
var fs = require('fs');
var fsExtra = require("fs-extra"); 


//공통설정
var LINK_LEVEL = 3;

//URL지정
var TARGET_URL = "http://localhost:3000/admin";
var list = {};

//output 프로젝트가 없으면 생성.
var PROJECT_NAME = "iccv-admin";
var output_folder = __dirname+"\\output\\"+PROJECT_NAME;

if( !fs.existsSync(__dirname+"\\output") ){
	fs.mkdirSync(__dirname+"\\output");
}

if( !fs.existsSync(output_folder) ){
	fs.mkdirSync(output_folder);
}else{
	fsExtra.removeSync(output_folder);
	fs.mkdirSync(output_folder);
}

//정적파일 복사
fsExtra.copy(__dirname+"\\public\\"+PROJECT_NAME, output_folder+"\\public", function(err){
	if( err ) return console.log(err);
	console.log("success!");
});


downloadRec(TARGET_URL, 0);

function downloadRec(url, level){
	if( level >= LINK_LEVEL ) return;

	//이미 다운받은 사이트는 무시
	if( list[url] ) return;
	list[url] = true;

	//외부페이지는 무시
	var us = TARGET_URL.split("/");
	us.pop();
	var base = us.join("/");
	if( url.indexOf(base) < 0 ) return;

	//HTML을 취득
	client.fetch(url, {}, function(err, $, res){

		//링크된 페이지를 취득
		$("a").each(function(idx){
			var href = $(this).attr('href');
			if( !href ) return;

			//상대경로를 절대경로로 변환
			href = urlType.resolve(url, href);
			
			//'#'이후를 무시
			href = href.replace(/#.+$/g,""); //말미의 #를 제거
			downloadRec(href, level+1);
		});

		var savepath = url.split("/").slice(3);
		var doc = "";
		var path = "";

		var public_path = "./../";
		
		if( savepath.length > 0 ){
			doc = (savepath[savepath.length-1] == "" ? "index" : savepath[savepath.length-1]) +".html";
			savepath.pop();
			checkSaveDir(savepath.join("/"));
			path = savepath.join("/")+"\\";
		}

		for(var i=0;i<savepath.length;i++){
			public_path += "../";
		}

		console.log(">>>output path:"+path+doc);
		var htmlDoc = $.html();
		htmlDoc = htmlDoc.replace(/\/public/gi, public_path+"public");
		fs.writeFileSync(output_folder+"\\html\\"+path+doc, htmlDoc);
	});
}

//저장할 디렉터리 존재유무확인
function checkSaveDir(fname){
	var dirlist = fname.split("/");
	var p = output_folder+"\\html\\";
	if( !fs.existsSync(p) ){
		fs.mkdirSync(p);
	}
	if( dirlist.length > 0 ){
		for(var i in dirlist){
			p += dirlist[i]+"\\";
			if( !fs.existsSync(p) ){
				fs.mkdirSync(p);
				fs.chmodSync(p, 0o777);
			}else{
				console.log("folder exist");
			}
		}
	}
}
