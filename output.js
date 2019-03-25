var client = require('cheerio-httpcli');
var urlType = require('url');

var url = "http://localhost:3000";
var param = {};
client.fetch(url, param, function(err, $, res){
	//에러체크
	if( err ){
		console.log("Error" , err);
		return;
	}
	$("a").each(function(idx){
		
	});
});