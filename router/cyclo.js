var express = require('express');
var router = express.Router();

router.get("/test", function(req, res){
	var config = req.app.get('config');
	res.render('cyclo/_layout', {
		title: config.name,
		menu : config.menu,
		page : 'test'
	});
});

router.get("/", function(req, res){
	var config = req.app.get('config');
	res.render('cyclo/_layout', {
		title: config.name,
		menu : config.menu,
		page : 'main/main'
	});
});

router.get('/company', function (req, res) {
	var config = req.app.get('config');
	res.render('cyclo/_layout', {
		title: config.name,
		menu : config.menu,
		page : 'company/company'
	});
});
router.get('/company/introduction', function (req, res) {
	var config = req.app.get('config');
	res.render('cyclo/_layout', {
		title: config.name,
		menu : config.menu,
		page : 'company/company'
	});
});
router.get('/company/location', function (req, res) {
	var config = req.app.get('config');
	res.render('cyclo/_layout', {
		title: config.name,
		menu : config.menu,
		page : 'company/company'
	});
});
router.get('/business', function (req, res) {
	var config = req.app.get('config');
	res.render('cyclo/_layout', {
		title: config.name,
		menu : config.menu,
		page : 'business/business'
	});
});

router.get('/performance', function (req, res) {
	var config = req.app.get('config');
	res.render('cyclo/_layout', {
		title: config.name,
		menu : config.menu,
		page : 'performance/performance'
	});
});

router.get('/gallery', function (req, res) {
	var config = req.app.get('config');
	res.render('cyclo/_layout', {
		title: config.name,
		menu : config.menu,
		page : 'gallery/list'
	});
});

module.exports = router;