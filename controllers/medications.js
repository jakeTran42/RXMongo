var Med = require('../models/medication');


module.exports = (app) => {

    // GET

    app.get('/med/new', function (req, res) {

      // var currentUser = req.user

      res.render('add-medication');
   })

    // CREATE
  app.post('/add/med', (req, res) => {
    // INSTANTIATE INSTANCE OF POST MODEL
    var med = new Med(req.body);

    // SAVE INSTANCE OF POST MODEL TO DB
    med.save((err, post) => {
      // REDIRECT TO THE ROOT
      return res.redirect(`/`);
    })
  });
};
