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
	console.log( "TEST!");
	res.send("MENU");
});

router.get('/business', function (req, res) {
	console.log( "TEST!");
	res.send("MENU");
});

router.get('/process', function (req, res) {
	console.log( "TEST!");
	res.send("MENU");
});

router.get('/gallery', function (req, res) {
	console.log( "TEST!");
	res.send("MENU");
});

module.exports = router;