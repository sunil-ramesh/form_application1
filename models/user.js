var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username:String,
    email   : String,
    password: String,
    salt: String,
    hash: String
});


var User = module.exports = mongoose.model('User',userSchema);

module.exports.getUser = function(callback,limit){
	
	User.find(callback).limit(limit);
}

module.exports.addUser =function(users,callback){
	User.create(users,callback);
} 
