var express = require('express');
var router = express.Router();
var folder = "iccv";

router.get('/', function (req, res) {
	var config = req.app.get('config');
	res.render(folder+'/_layout', {
		title: config.name,
		menu : config.menu,
		page : '_main'
	});
});

router.get('/register', function (req, res) {
	var config = req.app.get('config');
	res.render(folder+'/_layout', {
		title: config.name,
		menu : config.menu,
		page : 'register'
	});
});

router.get('/personalInfo', function (req, res) {
	var config = req.app.get('config');
	res.render(folder+'/_layout', {
		title: config.name,
		menu : config.menu,
		page : 'personalInfo'
	});
});

module.exports = router;