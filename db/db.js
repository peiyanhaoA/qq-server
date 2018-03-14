const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const url = 'mongodb://127.0.0.1:27017/qq';

mongoose.connect(url)


mongoose.connection.on('connected',() => {
	console.log('连接成功')
});
mongoose.connection.on('error',()=>{
	console.log('连接失败')
});
mongoose.connection.on('disconnected', function(){
	console.log('连接断开')
});

module.exports = mongoose;
