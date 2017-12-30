module.exports = (router, Users, passport, rndString) =>{
  var users = require('./models/users')(router, Users, passport);
  var auth = require('./models/auth')(router, Users, passport);

  router.use('/auth', auth);
  router.use('/users', users);

  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

  return router;
};
