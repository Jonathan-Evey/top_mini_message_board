var express = require('express');
var router = express.Router();
let messages = require('../data/allPosts');

router.get('/', function (req, res, next) {
	res.render('form', {
		title: 'Creat Message',
	});
});

router.post('/', function (req, res, next) {
	console.log(req.body);
	messages.unshift({
		text: req.body.postText,
		user: req.body.userName,
		added: new Date(),
	});
	res.redirect('/');
});

module.exports = router;
