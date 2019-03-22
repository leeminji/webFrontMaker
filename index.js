var express = require('express');
var app = express();
var router = express.Router();
var fs = require("fs");
var ux = require("./lib/ux"); //UX 라이브러리

//메인라우터
var routerMain = require('./router/main');
var config = {
	"name" : "FRONT WEB",
};

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));
app.use(express.static('data'));

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});

//메뉴를 미들웨어로 추가하여 다른 라우터에 각자 보낼수 있음.
var configMenu = function (req, res, next) {
	fs.readFile('./data/menu.json', 'utf8', function(err, data) {
		if( err ) throw err;

		var obj = JSON.parse(data);
		config.menu = ux.menu(obj);
		
		//cofing에 설정 넣기
		app.set("config", config );

		next();
	});
};

app.use(configMenu);
app.use('/', routerMain); //메인라우터

