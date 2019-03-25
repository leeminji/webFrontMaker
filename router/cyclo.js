var express = require('express');
var router = express.Router();

router.get("/", function(req, res){
	var config = req.app.get('config');
	res.render('cyclo/main', {
		title: config.name,
		menu : config.menu
	});
});

router.get('/company', function (req, res) {
	var config = req.app.get('config');
	res.render('cyclo/company', {
		title: config.name,
		menu : config.menu
	});
});

router.get('/business', function (req, res) {
	var config = req.app.get('config');
	res.render('cyclo/business', {
		title: config.name,
		menu : config.menu
	});
});

router.get('/performance', function (req, res) {
	var config = req.app.get('config');
	res.render('cyclo/performance', {
		title: config.name,
		menu : config.menu
	});
});

router.get('/gallery', function (req, res) {
	var config = req.app.get('config');
	res.render('cyclo/gallery', {
		title: config.name,
		menu : config.menu
	});
});

module.exports = router;