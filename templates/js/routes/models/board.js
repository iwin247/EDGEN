module.exports = (router, Users, Boards, passport, multer, to)=>{
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/Users/user/Desktop/asdf/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  });

  var uploads = multer({ storage: storage })

  router.route('/')
    .get(async(req, res, next)=>{
      var boards = await Boards.find();
      switch (req.device.type) {
        case 'desktop':
          return res.render('board', {boards: boards});
          break;
        default:
          if(boards) return res.status(200).json(boards);
          return res.status(404).json({message: "board not found"});
          break;
      }
      next();
    })
    .post(async(req, res, next)=>{
      var board_params = ["title", "contents"];
      const new_board = new Boards({
        title: req.body.title,
        contents: req.body.contents,
        writer: req.user.id
      });

      [e, result]  = await new_board.save();
      return res.redirect("/boards")
      next();
    });

  router.get('/write', async(req, res, next)=>{
    return res.render('board_write');
  })

  router.post('/file',  uploads.single('file'),  async(req, res, next)=>{
    return res.status(200).json({message: "su"})
  })

  router.route('/comments')
  .post(async(req, res, next)=>{
    var result = await Boards.update({board_id: req.body.board_id}, {$push: {comment: {writer: req.user.id, summary: req.body.summary}}});
    if(result) return res.status(200).json({message: "asdf"});
    next();
  })
  .delete(async(req, res, next)=>{
    var result = await Boards.update({board_id: req.body.board_id}, {$pop: {comment: {writer: req.user.id, summary: req.body.summary}}});
    if(result) return res.status(200).json({message: "asdf"});
    next();
  });

  return router;
}
