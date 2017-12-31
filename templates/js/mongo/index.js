import mongoose from 'mongoose';
import rndString from "randomstring";

var name = require('../package.json');
//mongodb will connect to localhost/projectname

var db = mongoose.connect('mongodb://localhost/'+name.name);
mongoose.Promise = global.Promise;

var UsersSchema = mongoose.Schema({
  id: {type: String},
  passwd: {type: String},
  name: {type: String},
  token: {type: String},
  setting: {type: String},
  profile: {type: String},
  profile_img: {type: String},
  facebook_id: {type: String},
  github_id: {type: String},
  twitter_id: {type: String},
  is_admin: {type: Boolean, default: 0}
});


require('./err')(UsersSchema, rndString);

var Users = mongoose.model("users", UsersSchema);

exports.Users = Users;

export default db;
