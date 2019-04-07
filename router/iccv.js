var express = require('express');
var router = express.Router();
var folder = "iccv";

router.get('/output', function (req, res) {
	var config = req.app.get('config');
	res.render(folder+'/_output', {
		title: "ICCV 퍼블리싱",
		menu : config.menu
	});
});

router.get('/', function (req, res) {
	var config = req.app.get('config');
	res.render(folder+'/_layout', {
		title: config.name,
		menu : config.menu,
		page : '_main'
	});
});

router.get('/01_register', function (req, res) {
	var config = req.app.get('config');
	res.render(folder+'/_layout', {
		title: config.name,
		menu : config.menu,
		page : '01_register'
	});
});

router.get('/02_register', function (req, res) {
	var config = req.app.get('config');
	res.render(folder+'/_layout', {
		title: config.name,
		menu : config.menu,
		page : '02_register'
	});
});

router.get('/03_register', function (req, res) {
	var config = req.app.get('config');
	res.render(folder+'/_layout', {
		title: config.name,
		menu : config.menu,
		page : '03_register'
	});
});

router.get('/04_register', function (req, res) {
	var config = req.app.get('config');
	res.render(folder+'/_layout', {
		title: config.name,
		menu : config.menu,
		page : '04_register'
	});
});

router.get('/05_register', function (req, res) {
	var config = req.app.get('config');
	res.render(folder+'/_layout', {
		title: config.name,
		menu : config.menu,
		page : '05_register'
	});
});

router.get('/mypage', function (req, res) {
	var config = req.app.get('config');
	res.render(folder+'/_layout', {
		title: config.name,
		menu : config.menu,
		page : 'mypage'
	});
});

module.exports = router;