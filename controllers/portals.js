var User = require('../models/user');


module.exports = (app) => {
  // CREATE

  app.get('/portals', function (req, res) {
    // var currentUser = req.user
    res.render('portal');
  })


  app.get('/logout', (req, res) => {
    res.clearCookie('nToken');
    res.redirect('/');
    console.log(req.cookies)
  });

};
