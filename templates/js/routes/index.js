module.exports = (express, Users, passport, rndString) =>{
  var router = express.Router();
  router.get('/', function(req, res, next) {
    res.status(200).json(req.user);
  });

  var auth = require('./models/auth')(express.Router(), Users, passport);
  var users = require('./models/users')(express.Router(), Users, passport);

  router.use('/auth', auth);
  router.use('/users', users);

  return router;
};
