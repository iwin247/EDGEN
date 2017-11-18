function user_duplicate(message) {
  this.message = (message || "");
}
function ValidationError(message) {
  this.message = (message || "");
}
function paramsError(message) {
  this.message = (message || "");
}

user_duplicate.prototype = new Error();
ValidationError.prototype = new Error();
paramsError.prototype = new Error();

function isAuth (req, res, next) {
  if (req.isAuthenticated())  return next();
  res.redirect('/auth/signin');
}


global.isAuth = isAuth;
global.user_duplicate = user_duplicate;
global.ValidationError = ValidationError;
global.paramsError = paramsError;

global.check_param = (req_param, params) =>{
  return
}
