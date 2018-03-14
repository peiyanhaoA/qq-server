let express = require('express');
let	bodyParser = require('body-parser');
let cookieParser = require('cookie-parser'); 
let app = express();
let router = require('./router/router.js');
let mongoose = require('./db/db.js');
let session = require('express-session');
let MongoStore = require('connect-mongo')(session);
let connect = require('connect')




app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({ extended: false, limit: '100mb'}));
app.use(bodyParser.raw({limit: '100mb'}));
app.use(cookieParser());

app.all('*', function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use('/', router)

app.use(session({
	secret: 'foo',
	resave: false,  //如果没有发生任何修改不储存session。
	saveUninitialized: false,   //在存储一些新数据之前，不创建session
	store: new MongoStore({
		url: 'mongodb://127.0.0.1:27017/qq',
		// touchAfter: 600, // 每个600秒更新一次session
		autoRemove:'native', // 自动清除到期session
		ttl: 60 * 60  //  设置session到期时间 1小时
	})
}))

app.listen(3000, function(){
	console.log('server is runing, prot is 3000')
})

module.exports = MongoStore;