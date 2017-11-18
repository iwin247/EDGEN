module.exports = (router, Users, passport, rndString) =>{
  var index = require('./models/users')(express.Router());
  var users = require('./models/users')(express.Router(), Users, passport);
  var auth = require('./models/auth')(express.Router(), Users, passport);

  router.use('/', index);
  router.use('/auth', auth);
  router.use('/users', users);

  return router;
};
