var express = require('express');
var router = express.Router();

router.get("/", function(req, res){
	var config = req.app.get('config');
	res.render('main', {
		title: config.name,
		length: 5,
		menu : config.menu
	});
});

router.get('/menu', function (req, res) {
	console.log( "TEST!");
	res.send("MENU");
});

module.exports = router;