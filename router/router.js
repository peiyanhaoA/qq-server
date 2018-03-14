let express = require('express');
let router = express.Router();
let User = require('../db/shema.js');

let MongoStore = require('../app.js');

router.post('/singn', function(req, res){
	let user = new User({
		name: req.body.name,
		password: req.body.password,
		telphone: req.body.telphone,
		createDate: new Date()
	})
	User.find({telphone: req.body.telphone}, function(err, docs){
		if (err) {
			console.log(err)
		}else{
			if (docs.length === 0) {
				user.save(function(err, data){
					if (err) {
						res.send(err)
					}else{
						res.send({code: 200, msg: '操作成功'});
					}
				})
			}else{
				res.send({code: 200, msg: '操作失败', err: '该手机号已注册'});
			}
		}
	})
	
})

router.post('/login', function(req, res){
	let user = req.body;
	User.find({telphone: req.body.telphone, password: req.body.password}, function(err, docs){
		if (err) {
			console.log(err)
		}else if(docs.length === 1){
			console.log(docs)
			let data = docs[0]
			console.log
			res.send({code: 200, msg: '操作成功'});
		}
	})
	
	
})

router.post('/home', function(req, res){
	
})

module.exports = router;