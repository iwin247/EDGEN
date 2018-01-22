module.exports = (router, Users, passport)=>{
  router.get('/', async (req, res)=>{
    if(req.user.is_admin){
      var users = await Users.find();
      res.status(200).json(users);
    }else res.sendStatus(404);
  })

  .get('/:id', (req, res)=>{

  })

  .put('/:id', (req, res)=>{

  })

  .patch('/:id', (req, res)=>{

  })

  .delete('/', async (req, res)=>{
    if(req.user.is_admin){
      var user = req.body.id;
      var result = await Users.remove(user);
      if(result) res.status(200).json({message: "success"});
      else res.status(500).json({message: "server err"});
    }else{
      var result = await Users.remove(req.user);
      if(result) {
        req.logout();
        res.status(200).json({message: "success"});
      }
      else res.status(500).json({message: "server err"});
    }
  })

  return router;
}
