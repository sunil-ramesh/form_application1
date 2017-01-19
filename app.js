var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var multer  = require('multer');
mongoose.connect('mongodb://localhost/myuserdb');
var db = mongoose.connection;
User = require('./models/user')

hash = require('./pass').hash;
var app = express();

app.set('view engine','ejs');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(express.bodyParser());

app.get('/',function(req,res){
	res.render('new')
});
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/users',function(req,res){
	User.getUser(function(err,users)
{
	if (err)
	 {
		throw err;
	}
	res.json(users)
})

})

app.post('/post',function(res,req){
	
	

	// var users = req.body;
	// var username = req;
	// console.log(username);
	// var username1 = req.body;
	// console.log(username1);



	// var email = req.body.email;
	// var password = req.body.password;

	User.addUser(function(err,result){
		if (err) {
			throw err;
		}
		res.send(result)
	})

})

app.listen(3000,function(){
	console.log('server running on 3000')
})