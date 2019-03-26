var express = require('express');

var app = express();
var router = express.Router();
var fs = require("fs");
var ux = require("./lib/ux"); //UX 라이브러리
var config = require("./config"); //설정

//메인라우터
var routerMain = require('./router/main');
var routerCyclo = require("./router/cyclo");

var config = {
	"menuJSON" : "menu-cyclo.json",
	"name" : "(주)협동사이크로",
};

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use('/public', express.static('public/cyclo'));
app.use(express.static('data'));

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});

//메뉴를 미들웨어로 추가하여 다른 라우터에 각자 보낼수 있음.
var configMenu = function (req, res, next) {
	fs.readFile('./data/'+config.menuJSON, 'utf8', function(err, data) {
		if( err ) throw err;

		var obj = JSON.parse(data);
		config.menu = ux.menu(obj);
		
		//cofing에 설정 넣기
		app.set("config", config );

		next();
	});
};

app.use(configMenu);
//app.use('/', routerMain); //메인라우터
app.use('/', routerCyclo); //메인라우터

