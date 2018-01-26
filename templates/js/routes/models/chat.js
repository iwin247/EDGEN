module.exports = (router, io)=>{
  router.get('/', (req, res)=>{
    return res.render('chat');
  })
  return router;
}
