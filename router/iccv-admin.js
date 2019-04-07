var express = require('express');
var router = express.Router();
var folder = "iccv-admin";

router.get('/', function (req, res) {
	var config = req.app.get('config');
	res.render(folder+'/_layout', {
		title: config.name,
		menu : config.menu,
		page : '_main'
	});
});
//회원
router.get('/member/list', function (req, res) {
	var config = req.app.get('config');
	res.render(folder+'/_layout', {
		title: config.name,
		menu : config.menu,
		page : 'member/list'
	});
});
router.get('/member/update', function (req, res) {
	var config = req.app.get('config');
	res.render(folder+'/_layout', {
		title: config.name,
		menu : config.menu,
		page : 'member/update'
	});
});
//등록
router.get('/register/list', function (req, res) {
	var config = req.app.get('config');
	res.render(folder+'/_layout', {
		title: config.name,
		menu : config.menu,
		page : 'register/list'
	});
});
router.get('/register/update', function (req, res) {
	var config = req.app.get('config');
	res.render(folder+'/_layout', {
		title: config.name,
		menu : config.menu,
		page : 'register/update'
	});
});
//숙박
router.get('/accomodation/list', function (req, res) {
	var config = req.app.get('config');
	res.render(folder+'/_layout', {
		title: config.name,
		menu : config.menu,
		page : 'accomodation/list'
	});
});
router.get('/accomodation/update', function (req, res) {
	var config = req.app.get('config');
	res.render(folder+'/_layout', {
		title: config.name,
		menu : config.menu,
		page : 'accomodation/update'
	});
});
//관광
router.get('/tourism/list', function (req, res) {
	var config = req.app.get('config');
	res.render(folder+'/_layout', {
		title: config.name,
		menu : config.menu,
		page : 'tourism/list'
	});
});
router.get('/tourism/update', function (req, res) {
	var config = req.app.get('config');
	res.render(folder+'/_layout', {
		title: config.name,
		menu : config.menu,
		page : 'tourism/update'
	});
});
//통계
router.get('/statistics/person', function (req, res) {
	var config = req.app.get('config');
	res.render(folder+'/_layout', {
		title: config.name,
		menu : config.menu,
		page : 'statistics/person'
	});
});
router.get('/statistics/register', function (req, res) {
	var config = req.app.get('config');
	res.render(folder+'/_layout', {
		title: config.name,
		menu : config.menu,
		page : 'statistics/register'
	});
});
router.get('/statistics/accomodation', function (req, res) {
	var config = req.app.get('config');
	res.render(folder+'/_layout', {
		title: config.name,
		menu : config.menu,
		page : 'statistics/accomodation'
	});
});
router.get('/statistics/tourism', function (req, res) {
	var config = req.app.get('config');
	res.render(folder+'/_layout', {
		title: config.name,
		menu : config.menu,
		page : 'statistics/tourism'
	});
});
module.exports = router;